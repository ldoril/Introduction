document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  // 프로젝트 아이템 클릭 시 상세 설명 토글
  document.querySelectorAll(".project-item").forEach((item) => {
    const details = item.querySelector(".project-details");

    item.addEventListener("click", () => {
      console.log("click");
      if (details.style.display === "block") {
        details.style.display = "none";
        details.style.maxHeight = null; // 접기 애니메이션
      } else {
        details.style.display = "block";
        details.style.maxHeight = details.scrollHeight + "px"; // 펼치기 애니메이션
      }
    });
  });
});
