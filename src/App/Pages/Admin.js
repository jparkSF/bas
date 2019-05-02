import React, { Component } from 'react';
import ReactS3 from 'react-s3';
import { connect } from 'react-redux';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s3_config: {
        bucketName: 'james-han-web-content',
        region: 'us-west-1',
        dirName: '',
        accessKeyId: '',
        secretAccessKey: ''
      },
      imageTitleForWork: {},
      dataForJournal: {},
      work: [],
      journal: []
    };
  }

  handleAuth(e, keyType) {
    let tempState = { ...this.state.s3_config }
    switch (keyType) {
      case 'AKID':
        tempState.accessKeyId = e.target.value;
        break;

      case 'SAK':
        tempState.secretAccessKey = e.target.value;
        break;

      default:

    }
    this.setState({ s3_config: tempState });
  }

  handleSelectedFiles(e, type) {
    let files = e.target.files
    let tempArr = []

    for (let i = 0; i < files.length; i++) {
      tempArr.push(files[i])
    }
    if (type === 'work') {
      this.setState({ work: tempArr })
    }
    if (type === 'journal') {
      this.setState({ journal: tempArr })
    }
  }
  handleImageTitleUpdate(e, idx) {
    let tempTitles = { ...this.state.imageTitleForWork }
    let title = e.target.value
    tempTitles[idx] = title
    this.setState({ imageTitleForWork: tempTitles })
  }

  loadFilesForWork(files) {
    if (!files.length) {
      return
    } else {
      let sortedArr = this.sortByName(files)
      return (
        <table>
          <tbody>
            <tr id="table-head">
              <th>Preview</th>
              <th>File Info</th>
              <th>Size</th>
              <th>Status</th>
            </tr>

            {sortedArr.map((file, idx) => {
              return (
                <tr key={file.lastModified}>
                  <td id="image-thumbnail" accessKey={file.lastModified}>{this.getThumbnail(file, file.lastModified)}</td>
                  <td id="file-name">
                    <p>File Name: {file.name}</p>
                    <br />
                    <p>Image Title:&nbsp;<input type="text" onChange={e => { this.handleImageTitleUpdate(e, idx) }} name="img_title" /></p>
                  </td>
                  <td id='file-size'>{this.getReadableFileSizeString(file.size)}</td>
                  <td id='upload-status' ><i className="far fa-square" accessKey={file.lastModified}></i></td>
                  {/* <i className="far fa-check-square"></i> */}
                  {/* <i class="fas fa-check-square"></i> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    }
  }

  sortByName(arr) {
    return arr.sort((b, a) => {
      let tempB = b.name.replace('.jpg', '')
      let tempA = a.name.replace('.jpg', '')
      return tempB - tempA
    })
  }

  getThumbnail(file, key) {
    var fileReader = new FileReader();
    if (file.type.match('image')) {
      fileReader.onload = function () {
        var img = document.createElement('img');
        img.src = fileReader.result;
        let element = window.$(`td[accessKey=${key}]`);
        element.empty();
        element.append(img);
      };
      fileReader.readAsDataURL(file);
    }
  }

  loadFilesForJournal(files) {
    if (!files.length) {
      return
    } else {
      let sortedArr = this.sortByName(files)
      return (
        <table>
          <tbody>
            <tr id="table-head">
              <th>Preview</th>
              <th>File Info</th>
              <th>Size</th>
              <th>Status</th>
            </tr>

            {sortedArr.map((file, idx) => {

              return (
                <tr key={file.lastModified}>
                  <td id="image-thumbnail" accessKey={file.lastModified}>{this.getThumbnail(file, file.lastModified)}</td>
                  <td id="file-name">
                    <p>File Name: {file.name}</p>
                    <br />
                    <p>Title:&nbsp;<input type="text" onChange={e => { this.handleThemeUpdate(e, idx, 'title') }} /></p>
                    <br />
                    <p>Description:&nbsp;<input type="text" onChange={e => { this.handleThemeUpdate(e, idx, 'desc') }} /></p>
                    <br />
                    <p>Theme:&nbsp;<input type="text" onChange={e => { this.handleThemeUpdate(e, idx, 'theme') }} /></p>
                    <br />
                    <p>Default Image:&nbsp;<input type="checkbox" onChange={e => { this.handleThemeUpdate(e, idx, 'default') }} /></p>
                  </td>
                  <td id='file-size'>{this.getReadableFileSizeString(file.size)}</td>
                  <td id='upload-status' ><i className="far fa-square" accessKey={file.lastModified}></i></td>
                  {/* <i className="far fa-check-square"></i> */}
                  {/* <i class="fas fa-check-square"></i> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    }
  }

  handleThemeUpdate(e, idx, field) {
    let newState = { ...this.state.dataForJournal }
    if (!newState[idx]) { newState[idx] = { title: " ", description: " ", theme: " ", default: false } }

    switch (field) {
      case 'title':
        newState[idx].title = e.target.value;
        break;

      case 'desc':
        newState[idx].description = e.target.value;
        break;

      case 'theme':
        newState[idx].theme = e.target.value;
        break;

      case 'default':
        newState[idx].default = newState[idx].default ? false : true
        break;

      default:
    }

    this.setState({ dataForJournal: newState })
  }

  handleSubmit(e, type) {
    e.preventDefault();

    switch (type) {
      case 'WORK':
        let works = this.state.work
        let imageTitle = this.state.imageTitleForWork
        works.map((work, idx) => {
          this.uploadToS3ThenWork(work, imageTitle[idx])
          setTimeout(() => { }, 500)
          return null
        })
        break;

      case 'JOURNAL':
        let journals = this.state.journal
        let dataForJournal = this.state.dataForJournal
        journals.map((journal, idx) => {
          this.uploadToS3ThenJournal(journal, dataForJournal[idx])
          setTimeout(() => { }, 500)
          return null
        })
        break;

      default:
    }
  }
  uploadToS3ThenJournal(file, fileData) {
    this.state.s3_config.dirName = "journals"
    if (!fileData) {
      fileData = {
        title: " ",
        description: " ",
        theme: " ",
        deafult: false
      }
    }

    ReactS3
      .uploadFile(file, this.state.s3_config)
      .then(data => {
        console.log(`(JOURNAL) Upload to S3 Bucket successful. Image title: ${fileData.title}`)
        let imageUrl = data.location;
        this.uploadToDBJournal(fileData.title, fileData.description, fileData.theme, fileData.default, imageUrl, file.lastModified)
      })
      .catch(err => {
        // console.log(err)
        alert("Incorrect credentials or something went wrong. Please try again!")
      })
  }
  uploadToDBJournal(img_title, img_desc, theme, img_default, img_url, key, body) {

    //post to journal DB
    fetch('https://xe4rfp4x38.execute-api.us-west-1.amazonaws.com/api/blogs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "theme": theme,
        "img_title": img_title,
        "img_url": img_url,
        "img_desc": img_desc,
        "default_img": img_default
      })
    })
      .then(res => {
        console.log(`(JOURNAL) Upload to DB successful. Image title: ${img_title}`)
        res.json()
        let target = window.$(`i[accessKey=${key}]`);
        target.removeClass('fa-square').addClass('fa-check-square').css('color', "#3a52f4");
      })
      .then(error => {
        // console.log(error)
      })
  }

  uploadToS3ThenWork(file, imageTitle) {
    this.state.s3_config.dirName = "works"
    ReactS3
      .uploadFile(file, this.state.s3_config)
      .then(data => {
        console.log(`(WORK) Upload to S3 Bucket successful. Image title: ${imageTitle}`)
        let imageUrl = data.location;
        this.uploadToDBWork(imageTitle, imageUrl, file.lastModified)
      })
      .catch(error => {
        console.log(error);
        alert("Incorrect credentials or something went wrong. Please try again!")
      })
  }

  uploadToDBWork(img_title, img_url, key) {
    //post to work DB
    fetch('https://xe4rfp4x38.execute-api.us-west-1.amazonaws.com/api/works', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        img_title,
        img_url
      })

    })
      .then(res => {
        res.json()
        let target = window.$(`i[accessKey=${key}]`);
        target.removeClass('fa-square').addClass('fa-check-square').css('color', "#3a52f4");
        console.log(`(WORK) Upload to DB successful. Image title: ${img_title}`)
      })
      .then(error => {
        // console.log(error)
      })
  }

  getReadableFileSizeString(fileSizeInBytes) {
    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };

  render() {
    let workImage = this.state.work;
    let journalImage = this.state.journal;
    return (
      <div className="content" >
        <br /><br /><br />
        <hr />
        <div className="auth-form">
          <p>Access Key ID:&nbsp;</p>
          <input type="text" onChange={e => this.handleAuth(e, 'AKID')} name="AKID" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p>Secret Access Key:&nbsp;</p>
          <input type="text" onChange={e => this.handleAuth(e, 'SAK')} name="SAK" />
        </div>
        <hr />

        <div className="uploader-wrapper">
          <div className="uploader-container">
            <table>
              <tbody>
                <tr id="table-head">
                  <th id="section-title"><h4>Add to Work Page</h4></th>
                  <th id="file-selector"><input type="file" onChange={e => this.handleSelectedFiles(e, 'work')} name="img" multiple required /></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="files-for-work" className="loaded-images-holder">
            {this.loadFilesForWork(workImage)}
          </div>
          <br />
          <input type="submit" onClick={e => this.handleSubmit(e, 'WORK')} className="btn custom-btn-dark" />
          <br />
          <br />
          <hr />

          <div className="uploader-container">
            <table>
              <tbody>
                <tr id="table-head">
                  <th id="section-title"><h4>Add to Journal Page</h4></th>
                  <th id="file-selector"><input type="file" onChange={e => this.handleSelectedFiles(e, 'journal')} name="img" multiple /></th>
                </tr>
              </tbody>
            </table>
            <div id="files-for-journal" className="loaded-images-holder"></div>
          </div>
          <div id="files-for-journal" className="loaded-images-holder">
            {this.loadFilesForJournal(journalImage)}
          </div>
          <br />
          <input type="submit" onClick={e => this.handleSubmit(e, 'JOURNAL')} className="btn custom-btn-dark" />
          <br /><br />
          <hr />
        </div>
        <br /><br /><br /><br /><br /><br /><br />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);