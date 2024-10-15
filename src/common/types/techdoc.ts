export interface TechDoc {
  /** index key */
  dcmId: string;

  /** 문서유형 */
  dcmTypeName: string;

  /** 함형No */
  dcmShiptypeNo: number;

  /** 함형 */
  dcmShiptypeName: string;
  
  /** 함정No */
  dcmShipNo: number;

  /** 함정명 */
  dcmShipName: string;

  /** 장비명 */
  dcmMcyName: string;

  /** 하위장비명 */
  dcmLowMcyName: string;

  /** 문서제목 */
  dcmTitle: string;

  /** 등록일 */
  userTime: Date;

  /** 등록자 */
  userName: string;
}