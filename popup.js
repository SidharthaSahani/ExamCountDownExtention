const examDate = new Date("2026-03-15T00:00:00");

const today = new Date();
today.setHours(0, 0, 0, 0);

const diffTime = examDate - today;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

const result = document.getElementById("result");

if (diffDays < 0) {
  result.textContent = "📌 Exam is over";
} else if (diffDays === 0) {
  result.textContent = "🎉 EXAM DAY!";
} else {
  result.textContent = `⏳ ${diffDays} days left`;
}
