import React from 'react'
  
const Progressbar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: '#F2F6F7',
        marginBottom:30
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
  
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <p>Listing Completeness</p>
            <p>{`${progress}%`}</p>
        </div>
        <div style={Parentdiv}>
            <div style={Childdiv}>
                {/* <span style={progresstext}>{`${progress}%`}</span> */}
            </div>
        </div>
    </div>
    )
}
  
export default Progressbar;