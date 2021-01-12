import React from 'react';
import Chart from "react-google-charts";

class StreakCalendar extends React.Component{
    
     createTable = () => {
        var i = 1;
     
        var data = [
            [
              {
                type: "date",
                id: "Date"
              },
              {
                type: "number",
                id: "streak"
              }
            ]
        ];

        this.props.streakinfo.map((day, i)=> {  
            var internalArray = [day[i].date, day[i].streak];       
            data.push(internalArray);   
        });
           
 
       
        /*
        for(var date in this.props.streakinfo) {
            // propertyName is what you want
            // you can get the value like this: myObject[propertyName]
            internalArray[0] = this.props.streakinfo[date];
            i++;
         }
    
         i = 1;

         for(var streak in this.props.streakinfo) {
            // propertyName is what you want
            // you can get the value like this: myObject[propertyName]
            internalArray[1] = this.props.streakinfo[streak];
            i++;
         }

         data[9][0] = new Date(2021,2,5);
         data[9][1] = 6;

         */
    
        return data;
    }

    render(){
        return(<div className = "Calendar" style={{display: 'flex', justifyContent: 'center'}}>
                <Chart className = "pt2 pa3"
                    width={1200}
                    height={500}
                    chartType="Calendar"
                    loader={<div>Loading streak calendar</div>}
                    /* JAN = 0, DEC = 11 */
                    data = {this.createTable()}
                    options={{
                        title: 'streak',
                        calendar: {
                            cellSize: 20,
                            cellColor: {
                                stroke: '#FFFFFF',
                                strokeOpacity: 1,
                                strokeWidth: 2,
                            },
                            focusedCellColor: {
                                stroke: '#ff8c00',
                                strokeOpacity: 1,
                                strokeWidth: 1,
                            },
                            monthOutlineColor: {
                                stroke: '#808080',
                                strokeOpacity: 0.8,
                                strokeWidth: 2
                            },
                            unusedMonthOutlineColor: {
                                stroke: '#FFFFFF',
                                strokeOpacity: 0.2,
                                strokeWidth: 1
                            }  
                        },
                        noDataPattern: {
                            backgroundColor: '#000000',
                            color: '#000000'
                        },
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>       
        );
    }
}
    

export default StreakCalendar;