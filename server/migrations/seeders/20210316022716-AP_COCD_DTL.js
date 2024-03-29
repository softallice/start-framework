'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const AP_COCD_DTL = [
      {
        "id": 1,
        "cocd_grp_cd" : "1001",
        "cocd" : "10",
        "cocd_nm" : "서비스 이용약관(필수)",
        "dscr" : "서비스 이용안내",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 2,
        "cocd_grp_cd" : "1001",
        "cocd" : "11",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "개인정보 수집·이용 안내",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 3,
        "cocd_grp_cd" : "1001",
        "cocd" : "12",
        "cocd_nm" : "위치기반서비스 이용약관(필수)",
        "dscr" : "위치정보 확인",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 4,
        "cocd_grp_cd" : "1001",
        "cocd" : "13",
        "cocd_nm" : "건강검진 결과 제공 및 의학생체나이 수집 동의(필수)",
        "dscr" : "건강검진 결과 제공 및 의학생체나이 수집 안내",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 5,
        "cocd_grp_cd" : "1001",
        "cocd" : "14",
        "cocd_nm" : "개인정보 수집 및 이용동의(선택)",
        "dscr" : "개인정보 수집·이용 안내",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 6,
        "cocd_grp_cd" : "1001",
        "cocd" : "20",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "삼성서울병원 처방전 내역",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 7,
        "cocd_grp_cd" : "1001",
        "cocd" : "21",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "충남대학교병원 처방전 내역",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 8,
        "cocd_grp_cd" : "1001",
        "cocd" : "22",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "건강검진 결과",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 9,
        "cocd_grp_cd" : "1001",
        "cocd" : "23",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "장내미생물검사 결과",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 10,
        "cocd_grp_cd" : "1001",
        "cocd" : "24",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "진단검사 결과",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 11,
        "cocd_grp_cd" : "1001",
        "cocd" : "25",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "유전자검사 결과",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 12,
        "cocd_grp_cd" : "1001",
        "cocd" : "26",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "사진으로 찍은 처방전 내역",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 13,
        "cocd_grp_cd" : "1001",
        "cocd" : "30",
        "cocd_nm" : "개인정보 제 3자 제공(필수)",
        "dscr" : "의학생체나이",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 14,
        "cocd_grp_cd" : "1001",
        "cocd" : "31",
        "cocd_nm" : "개인정보 제 3자 제공(필수)",
        "dscr" : "이름,생년월일,성별,전화번호,제공데이터",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 15,
        "cocd_grp_cd" : "1001",
        "cocd" : "32",
        "cocd_nm" : "개인정보 제 3자 제공(필수)",
        "dscr" : "이름,생년월일,성별,전화번호,제공데이터",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 16,
        "cocd_grp_cd" : "1001",
        "cocd" : "33",
        "cocd_nm" : "개인정보 제 3자 제공(필수)",
        "dscr" : "이름,생년월일,성별,전화번호,제공데이터",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 17,
        "cocd_grp_cd" : "1001",
        "cocd" : "34",
        "cocd_nm" : "개인정보 제 3자 제공(필수)",
        "dscr" : "이름,생년월일,성별,전화번호,제공데이터",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 18,
        "cocd_grp_cd" : "1001",
        "cocd" : "50",
        "cocd_nm" : "개인정보 제 3자 제공(필수)",
        "dscr" : "이름,휴대전화번호,이메일,주소,주문내역",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 19,
        "cocd_grp_cd" : "1001",
        "cocd" : "51",
        "cocd_nm" : "개인정보 제 3자 제공(필수)",
        "dscr" : "이름,휴대전화번호,이메일,주소,주문내역",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 20,
        "cocd_grp_cd" : "1001",
        "cocd" : "52",
        "cocd_nm" : "개인정보 제 3자 제공(필수)",
        "dscr" : "이름,생년월일,성별,전화번호,제공데이터",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 21,
        "cocd_grp_cd" : "1001",
        "cocd" : "53",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "건강검진 결과",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 22,
        "cocd_grp_cd" : "1001",
        "cocd" : "60",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "이름,휴대전화번호,주소",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 23,
        "cocd_grp_cd" : "1001",
        "cocd" : "61",
        "cocd_nm" : "개인정보 수집 및 이용동의(필수)",
        "dscr" : "이름,휴대전화번호",
        "etc_conts_1" : null,
        "etc_conts_2" : null,
        "etc_conts_3" : null,
        "use_yn" : null,
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      }
    ]

    await queryInterface.bulkInsert('ap_cocd_dtl', AP_COCD_DTL, {});
    console.log('AP_COCD_DTL insert.');
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('ap_cocd_dtl', null, {});
  }
};
