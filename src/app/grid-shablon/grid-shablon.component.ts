import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

enum GridElementType {
  Period,
  SubPeriod,
  Box,
  BoxIntime
}

enum BoxIntimeStatus {
  free,
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
  gridoptions: IGridElementOptions
  dataoptions: IGridElementData
}

interface IGridElementComplex {
  element: IGridElementObject
  elements: Array<IGridElementObject>
}

interface IGridOptions {
  cols: number
  rowHeight: string
}

interface IGridObjectData {
  options: IGridOptions,
  header: IGridElementObject,
  headPeriods: Array<IGridElementObject>
  boxes: Array<IGridElementObject>
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


  GetGridObjectExample(): IGridObjectData {


    let options = { cols: 105, rowHeight: "10px" };

    let header = {
      gridoptions: { rowspan: 4, colspan: 12 },
      dataoptions: { data: { title: "HOTEL" } }
    }

    let headPeriods = [
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
        }
      }
    ];


    for (let index = 1; index < 32; index++) {
      let element = {
        gridoptions: { rowspan: 2, colspan: 3 },
        dataoptions: {
          data: {
            title: index.toString(),
            subtitle: "day",
            periodbegin: new Date(),
            periodlenth: 1
          }
        }
      }
      headPeriods.push(element);
    }

    let boxes = [];
    let elementbox = {
      gridoptions: { rowspan: 2, colspan: 105 },
      dataoptions: {
        data: {
          title: "Flore 1",
          id: "Flore 1",
          boxnumber: "Flore 1"
        }
      }
    }
    boxes.push(elementbox)


    for (let index = 1; index < 15; index++) {
      let elementbox = {
        
          gridoptions: { rowspan: 2, colspan: 12 },
          dataoptions: {
            data: {
              title: "room " + index,
              id: index.toString(),
              boxnumber: index
            }
          }
      }
      boxes.push(elementbox)


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
          }
        }
        boxes.push(elementboxintime)

      }
    }


    let res: IGridObjectData = {
      options: options,
      header: header,
      headPeriods: headPeriods,
      boxes: boxes
    };
    return res;
  }

  GridData: IGridObjectData = this.GetGridObjectExample()


  constructor() { 
    console.log(this.GridData);
  }

  ngOnInit() {
  }

}
