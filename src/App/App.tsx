
import './App.css';
import React from 'react';



function App() {
  const [titleValue, setTitleValue] = React.useState('')
  const [summaryValue, setSummaryValue] = React.useState('')
  const [contentValue, setContentValue] = React.useState('')
  const [displayedData, setDisplayedData] = React.useState({
    title: '',
    summary: '',
    content: ''
  })
  const setDisplayData = (formData: any) => {
    setDisplayedData(formData)
  }
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let newFormData = {
      title: data.get('form-title'),
      summary: data.get('form-summary'),
      content: data.get('form-content'),
    };
    setDisplayData(newFormData)
  }
  const contentInputChange = ({target}: any) => setContentValue(target.value) 
  const summaryInputChange = ({target}: any) => setSummaryValue(target.value) 
  const titleInputChange = ({target}: any) => setTitleValue(target.value)
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <form onSubmit={onFormSubmit}>
            <label htmlFor="form-title"></label>
            <input value={titleValue} onChange={titleInputChange} id="form-title" name="form-title"></input>
            <label htmlFor="form-summary"></label>
            <input value={summaryValue} onChange={summaryInputChange} id="form-summary" name="form-summary"></input>
            <label htmlFor="form-content"></label>
            <input value={contentValue} onChange={contentInputChange} id="form-content" name="form-content"></input>
            <button>press</button>
        </form>
        <div style={{width: 600, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column'}}>
          <span>
              The Title to your story is: {displayedData.title}
          </span>
          <span>
             The Summary to your story is: {displayedData.summary}
          </span>
          <span>
              The content of your story is: <br></br> {displayedData.content}
          </span>
        </div>
    </div>
  );
}

export default App;
