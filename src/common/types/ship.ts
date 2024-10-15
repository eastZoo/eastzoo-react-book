export interface Ship {
  /** key index */
  shipId: number;

  /** index(함형) */
  shipTypeId: number;

  /** 함형No */
  shipTypeNo: string;

  /** 함형명 */
  shipTypeName: string;

  /** 함정No */
  shipNo: string;

  /** 함정명 */
  shipName: string;

  /** 건조사 */
  shipProduce?: string;

  /** 톤수 */
  shipTon?: string;

  /** 최대속도 */
  shipSpeed?: string;

  /** 취역내역 */
  shipGetTime?: Date;

  /** 함정상태값 */
  shipState?: number;
}

export interface ShipType {
  /** key index*/
  shipTypeId: number;

  /** 함형No*/
  shipTypeNo: string;

  /** 함형*/
  shipTypeName: string;

  /** 함형 활성화 유/무*/

  shipTypeVisible?: boolean;
}

export interface ShipOperationStatus {
  createdTime: Date;
  dashboard1?: number;
  dashboard2?: number;
  dashboard3?: number;
  dashboard4?: number;
  dashboard5a?: number;
  dashboard5b?: Date;
  dashboard6?: number;
  dashboard7?: number;
  dashboard8a?: number;
  dashboard8b?: Date;
  dashboard9?: number;
  dashboard10?: number;
  dashboard11a?: number;
  dashboard11b?: Date;
  dashboard12?: number;
  dashboard13?: number;
  dashboard14?: number;
  dashboard15?: number;
  dashboard16?: number;
  dashboard17?: number;
  dashboard18?: number;
  dashboard19?: number;
  dashboard20?: number;
  dashboard21?: number;
  dashboard22?: number;
  dashboard23?: number;
  dashboard24?: number;
  dashboard25?: number;
  dashboard26?: number;
  dashboard27?: number;
  dashboard28?: number;
  dashboard29?: number;
  dashboard30?: number;
  dashboard31?: number;
  dashboard32?: number;
  dashboard33?: number;
  dashboard34?: number;
  dashboard35?: number;
  dashboard36?: number;
  dashboard37a?: number;
  dashboard37b?: Date;
  dashboard38a?: number;
  dashboard38b?: Date;
  dashboard39a?: number;
  dashboard39b?: Date;
  dashboard40a?: number;
  dashboard40b?: Date;
}
