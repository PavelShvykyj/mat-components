import { element } from 'protractor';
import { Component, OnInit, Input, HostListener } from '@angular/core';

enum GridElementType {
  Period,
  SubPeriod,
  Box,
  BoxIntime,
  Header
}

enum BoxIntimeStatus {
  free,
  reserved,
  accommodation,
  arrived,
  departure,
  cleaning,
  disabled
}

interface IGridElementOptions {
  rowspan: number,
  colspan: number
}

interface IPeriodData {
  title: string,
  subtitle: string,
  periodbegin: Date,
  periodlenth: number
}

interface ISubPeriodData {
  perioddata: IPeriodData
}

interface IBoxData {
  title: string,
  id: string,
  boxnumber: number
}

interface IBoxInTimeData {
  box: IBoxData,
  status: BoxIntimeStatus,
  periodbegin: Date
}

interface IHeaderData {
  title: string
}

interface IGridElementData {
  data: IPeriodData | ISubPeriodData | IBoxData | IBoxInTimeData | IHeaderData
}

interface IGridElementObject {
  gridoptions: IGridElementOptions,
  dataoptions: IGridElementData,
  elementtype : GridElementType
}



interface IGridOptions {
  cols: number
  rowHeight: string
}

interface IGridObjectData {
  options: IGridOptions,
  elements : Array<IGridElementObject>
}



//// для простой произвольной разметки 
interface IGridTile {
  rowspan: number,
  colspan: number,
  header: string
}

interface IGridObject {
  cols: number,
  tiles: Array<IGridTile>
}


@Component({
  selector: 'grid-shablon',
  templateUrl: './grid-shablon.component.html',
  styleUrls: ['./grid-shablon.component.scss']
})
export class GridShablonComponent implements OnInit {

  @Input() themes = {
    "brown": true,
    "grey": false

  };


  
  GridData: IGridObjectData = this.GetGridObjectExample();
  
  GridElementtype : typeof GridElementType = GridElementType;
  LastWidht : number;
  CheckPointReformat = 1024;


  constructor() { 
    
  }

  ngOnInit() {
    this.LastWidht = window.innerWidth;
    this.Reformat();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
  
    let currWidth = event.target.innerWidth;
    //console.log('curr', currWidth)
    //console.log('last', this.LastWidht);

    if(currWidth <= this.CheckPointReformat && this.LastWidht >= this.CheckPointReformat) {
      this.LastWidht = currWidth;
      this.Reformat();
      return
    } 

    if(currWidth >= this.CheckPointReformat && this.LastWidht <= this.CheckPointReformat) {
      this.LastWidht = currWidth;
      this.Reformat();
      return
    } 

    this.LastWidht = currWidth;

  }

  Reformat(){
    if (this.LastWidht <= this.CheckPointReformat) {
      this.SmallFormat();
    }
    else {
      this.Format();
    }
  }

  SmallFormat() {
    this.GridData = this.GetGridObjectExampleSmall();   
  }

  Format() {
    this.GridData = this.GetGridObjectExample();   
  }


  GetGridObjectExampleSmall(): IGridObjectData {
    let options : IGridOptions  = { cols: 21, rowHeight: "10px" };
    let res: IGridObjectData = {
      options: options,
      elements : []
    };

    let elementbox = {
      gridoptions: { rowspan: 2, colspan: 21 },
      dataoptions: {
        data: {
          title: "Flore 1",
          id: "Flore 1",
          boxnumber: "Flore 1"
        }
      },
      elementtype : GridElementType.Box
    }
    res.elements.push(elementbox);

    for (let index = 1; index < 15; index++) {
      let elementbox = {
        
          gridoptions: { rowspan: 2, colspan: 21 },
          dataoptions: {
            data: {
              title: "room " + index,
              id: index.toString(),
              boxnumber: index
            }
          },
          elementtype : GridElementType.Box
      }
      res.elements.push(elementbox)

      let MainPeriod : IGridElementObject = 
      {
        gridoptions: { rowspan: 2, colspan: 21 },
        dataoptions: {
          data:
          {
            title: "Month",
            subtitle: "2019",
            periodbegin: new Date(),
            periodlenth: 1
          }
        },
        elementtype : GridElementType.Period
      };
    
    res.elements.push(MainPeriod);  

      for (let indexdate = 1; indexdate < 32; indexdate++) {
        let elementboxintime: IGridElementObject = {
          gridoptions: { rowspan: 2, colspan: 3 },
          dataoptions: {
            data: {
              box: {
                title: "room " + index,
                id: index.toString(),
                boxnumber: index
              },
              status: BoxIntimeStatus.free,
              periodbegin: new Date(2019, 1, indexdate)

            }
          },
          elementtype : GridElementType.BoxIntime
        }
        res.elements.push(elementboxintime)
      }
    }

    return res;


  }


  GetGridObjectExample(): IGridObjectData {
    let options : IGridOptions  = { cols: 105, rowHeight: "10px" };
    let res: IGridObjectData = {
      options: options,
      elements : []
    };


    let header : IGridElementObject = {
      gridoptions: { rowspan: 4, colspan: 12 },
      dataoptions: { data: { title: "HOTEL" } },
      elementtype : GridElementType.Header
    }

    res.elements.push(header);

    let MainPeriod : IGridElementObject = 
      {
        gridoptions: { rowspan: 2, colspan: 93 },
        dataoptions: {
          data:
          {
            title: "Month",
            subtitle: "2019",
            periodbegin: new Date(),
            periodlenth: 1
          }
        },
        elementtype : GridElementType.Period
      };
    
    res.elements.push(MainPeriod);  


    for (let index = 1; index < 32; index++) {
      let element : IGridElementObject  = {
        gridoptions: { rowspan: 2, colspan: 3 },
        dataoptions: {
          data: {
            title: index.toString(),
            subtitle: "day",
            periodbegin: new Date(),
            periodlenth: 1
          }
        },
        elementtype : GridElementType.SubPeriod
      }
      res.elements.push(element);
    }

    
    let elementbox = {
      gridoptions: { rowspan: 2, colspan: 105 },
      dataoptions: {
        data: {
          title: "Flore 1",
          id: "Flore 1",
          boxnumber: "Flore 1"
        }
      },
      elementtype : GridElementType.Box
    }
    res.elements.push(elementbox);


    for (let index = 1; index < 15; index++) {
      let elementbox = {
        
          gridoptions: { rowspan: 2, colspan: 12 },
          dataoptions: {
            data: {
              title: "room " + index,
              id: index.toString(),
              boxnumber: index
            }
          },
          elementtype : GridElementType.Box
      }
      res.elements.push(elementbox)


      for (let indexdate = 1; indexdate < 32; indexdate++) {
        let elementboxintime: IGridElementObject = {
          gridoptions: { rowspan: 2, colspan: 3 },
          dataoptions: {
            data: {
              box: {
                title: "room " + index,
                id: index.toString(),
                boxnumber: index
              },
              status: BoxIntimeStatus.free,
              periodbegin: new Date(2019, 1, indexdate)

            }
          },
          elementtype : GridElementType.BoxIntime
        }
        res.elements.push(elementboxintime)
      }
    }


    
    
    
    return res;
  }

}
