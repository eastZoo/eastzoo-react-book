export interface DataFile {
  /** index key */
  bupId: string;

  /** 파일 생성 시간 */
  bupTime: Date;
  
  /** 파일명 */
  bupFileName: string;

  /** 파일 용량 */
  bupStorage: string;
}
