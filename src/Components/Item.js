import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      allJournals: []
    }
  }


  componentWillReceiveProps(nextProps){
    this.setState({
      allJournals: nextProps.allJournals
    })
  }
  processData(arr) {
    return arr.sort((b, a) => {
      return b.created_at - a.created_at
    })
  }

  render() {
    const journals = this.props.data;
    // let sortedJournals = this.processData(journals);
    let time, date, month, year; 
    let link;
    const styles = {
      display: 'block'
    };

    return (
      <div className=''>
        {journals.map(journal => {
              time = new Date(parseInt(journal.created_at))
              date = time.getDate().toString();
              month = (time.getMonth()+1).toString();
              month = month.length === 1 ? "0" + month : month;
              year = (time.getYear()-100).toString();

              link = journal.theme.split(" ").join("-").toLowerCase()
              
              return (
                <div className="media" key={journal.id} >
                  <div className="inner-content">
                    <Link to={{pathname: `/journal/${link}`, allJournals: this.state.allJournals}}>
                      <div className="image-container">
                        <img className="fade-in journal-theme" src={journal.img_url} style={styles} alt="" />
                          <div className="overlay">
                            {/* <div className="text">Click for more</div> */}
                          </div>  
                      </div>
                    </Link>
                    <div className="journal-text-wrapper">
                      <Link to={{ pathname: `/journal/${link}`, allJournals: this.state.allJournals }}>
                        <span className="journal-theme-title">{journal.theme ? journal.theme : ""}</span>
                      </Link>
                      <span className="journal-theme-date">{time ? month + ". " + date + ". " + year : ""}</span>
                    </div>
                    <span className="journal-theme-desc">{journal.img_desc ? journal.img_desc : ""}
                      &nbsp;...&nbsp;
                        <Link to={{ pathname: `/journal/${link}`}}>
                          <u>read more</u>
                        </Link>
                    </span>
                  </div>
                </div>
              )
            })}
      </div>
    );
  }
}

export default Item;