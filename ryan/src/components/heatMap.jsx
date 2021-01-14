import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import 'react-calendar-heatmap/dist/styles.css';
import './styles.css';




class HeatMap extends React.Component{
    
    render() {
        const {data} = this.props;
        const currentYear = new Date().getFullYear();

        return(<div className = 'pt7'>
                    <CalendarHeatmap 
                        startDate={new Date('2020-12-01')}
                        endDate={new Date(currentYear+'-12-31')}
                        values={data}
                    
                        tooltipDataAttrs={value => {
                            var dateObj = new Date(value.date);
                            var year = dateObj.getFullYear();
                            var month = dateObj.getMonth() + 1; //months from 1-12
                            var day = dateObj.getDate();
                            var streakP = value.streak;

                            if(year < 2020){
                                year = 0;
                                month = 0;
                                day = 0;
                                streakP = 0;
                            }

                            var newdate = year + "/" + month + "/" + day;
                            return ({'data-tip': `${newdate}, streak: ${streakP}`});
                            
                        }}

                        // to determine the range of the colors
                        classForValue={(value) => {
                            if (!value) {
                              return 'color-empty';
                            } else if (value.streak > 5){
                                return `color-scale-5`;
                            } else {
                                return `color-scale-${value.streak}`;
                            }
                          
                          }}
                    />  
                    <ReactTooltip />  
        </div>);
    }
}


export default HeatMap;