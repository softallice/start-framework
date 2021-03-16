'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const AP_COCD_MST = [
      {
        "id": 1,
        "cocd_grp_cd" : "1001",
        "cocd_grp_nm" : "약관유형코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 2,
        "cocd_grp_cd" : "1002",
        "cocd_grp_nm" : "단계구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 3,
        "cocd_grp_cd" : "1003",
        "cocd_grp_nm" : "데이터유형코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 4,
        "cocd_grp_cd" : "1004",
        "cocd_grp_nm" : "SNS구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 5,
        "cocd_grp_cd" : "1005",
        "cocd_grp_nm" : "성별코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 6,
        "cocd_grp_cd" : "1006",
        "cocd_grp_nm" : "국적구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 7,
        "cocd_grp_cd" : "1007",
        "cocd_grp_nm" : "영수증구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 8,
        "cocd_grp_cd" : "1008",
        "cocd_grp_nm" : "혈압측정구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 9,
        "cocd_grp_cd" : "1009",
        "cocd_grp_nm" : "혈당측정구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 10,
        "cocd_grp_cd" : "1010",
        "cocd_grp_nm" : "LIFELOG구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 11,
        "cocd_grp_cd" : "1011",
        "cocd_grp_nm" : "서비스코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 12,
        "cocd_grp_cd" : "1012",
        "cocd_grp_nm" : "업종코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 13,
        "cocd_grp_cd" : "1013",
        "cocd_grp_nm" : "업태코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 14,
        "cocd_grp_cd" : "1014",
        "cocd_grp_nm" : "시간단위구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 15,
        "cocd_grp_cd" : "1015",
        "cocd_grp_nm" : "데이터입력경로구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 16,
        "cocd_grp_cd" : "1016",
        "cocd_grp_nm" : "보험유형코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 17,
        "cocd_grp_cd" : "1017",
        "cocd_grp_nm" : "급여구분",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 18,
        "cocd_grp_cd" : "1018",
        "cocd_grp_nm" : "판매처코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 19,
        "cocd_grp_cd" : "1019",
        "cocd_grp_nm" : "카테고리코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 20,
        "cocd_grp_cd" : "1020",
        "cocd_grp_nm" : "배송요청사항",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 21,
        "cocd_grp_cd" : "1021",
        "cocd_grp_nm" : "주문유형구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 22,
        "cocd_grp_cd" : "1022",
        "cocd_grp_nm" : "로그인이력구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 23,
        "cocd_grp_cd" : "1023",
        "cocd_grp_nm" : "알람유형",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 24,
        "cocd_grp_cd" : "1024",
        "cocd_grp_nm" : "알람TOPIC",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 25,
        "cocd_grp_cd" : "1025",
        "cocd_grp_nm" : "주문상태코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 26,
        "cocd_grp_cd" : "1026",
        "cocd_grp_nm" : "반품상태코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 27,
        "cocd_grp_cd" : "1027",
        "cocd_grp_nm" : "반품사유코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 28,
        "cocd_grp_cd" : "1028",
        "cocd_grp_nm" : "교환상태코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 29,
        "cocd_grp_cd" : "1029",
        "cocd_grp_nm" : "교환사유코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 30,
        "cocd_grp_cd" : "1030",
        "cocd_grp_nm" : "상담쿠폰유형",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 31,
        "cocd_grp_cd" : "1031",
        "cocd_grp_nm" : "상담사구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 32,
        "cocd_grp_cd" : "1032",
        "cocd_grp_nm" : "택배사코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 33,
        "cocd_grp_cd" : "1033",
        "cocd_grp_nm" : "배송방법구분코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 34,
        "cocd_grp_cd" : "1034",
        "cocd_grp_nm" : "태어난시코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 35,
        "cocd_grp_cd" : "1035",
        "cocd_grp_nm" : "띠코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 36,
        "cocd_grp_cd" : "1036",
        "cocd_grp_nm" : "별자리코드",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      },
      {
        "id": 37,
        "cocd_grp_cd" : "1037",
        "cocd_grp_nm" : "뉴스유형",
        "dscr" : "",
        "up_cocp_grp_cd" : null,
        "use_yn" : "Y",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      }
    ]


    await queryInterface.bulkInsert('ap_cocd_mst', AP_COCD_MST, {});
    console.log('AP_COCD_MST insert.');
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('ap_cocd_mst', null, {});
  }
};
