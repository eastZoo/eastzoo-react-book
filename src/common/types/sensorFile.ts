export interface SensorFile {
  /** index key */
  // ssrId: string;

  /** 파일 아이디 */
  mcyFId: string;

  /** 파일 이름 */
  mcyFFileName: string;

  /** 파일 메모 */
  mcyFMemo: string;

  /** 작성자 id */
  userId: string;

  /** 작성자 */
  userName: string;

  /** 작성시간 */
  userTime: number;
}
