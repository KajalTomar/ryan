import React from 'react';
import { Chart } from "react-google-charts";

class StreakCalendar extends React.Component {

    render (){
    return(<div className = "Calendar" style={{display: 'flex', justifyContent: 'center'}}>
            <Chart className = "pt7 pa3"
                width={1200}
                height={500}
                chartType="Calendar"
                loader={<div>Loading streak calendar</div>}
                /* JAN = 0, DEC = 11 */
                data={[
                    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'streak' }],
                    [new Date(2020, 8, 11), 0],
                    [new Date(2020, 8, 12), 1],
                    [new Date(2020, 8, 13), 2],
                    [new Date(2020, 8, 14), 0],
                    [new Date(2020, 8, 15), 0],
                    [new Date(2020, 10, 16), 1],
                    [new Date(2020, 10, 17), 2],
                    [new Date(2020, 10, 18), 3],
                    [new Date(2020, 10, 19), 4],
                    [new Date(2020, 10, 20), 0],
                    [new Date(2020, 10, 21), 0],
                    [new Date(2020, 10, 22), 1],
                    [new Date(2020, 10, 23), 2],
                ]}
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