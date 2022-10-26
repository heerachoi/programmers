// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/220

function solution(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);
  let reported_list = {};
  let checkSameReport = [];
  id_list.map((user) => {
    reported_list[user] = [];
  });

  for (let i = 0; i < report.length; i++) {
    let [reporter_id, reported_id] = report[i].split(' ');
    if (!reported_list[reported_id].includes(reporter_id)) {
      reported_list[reported_id].push(reporter_id);
    }
  }
  for (const key in reported_list) {
    if (reported_list[key].length >= k) {
      reported_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}
