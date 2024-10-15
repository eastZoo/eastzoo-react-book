export interface LoginLog {
  /**
   * Primary Key, Index
   */
  logId: number;

  /**
   * 사용자id
   */
  logUserId: string;

  /**
   * 로그인 시간
   */
  logLoginTime: Date;

  /**
   * 로그아웃 시간
   */
  logLogoutTime: Date;

  /**
   * 접속 누적 시간
   */
  logLoginTotalTime: Date;

  /**
   * 접속 IP
   */
  logLoginIp: string;
}
