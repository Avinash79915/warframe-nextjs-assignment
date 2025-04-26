export default function PendingQuestions() {
  const questions = [
    {
      name: "Phoenix Baker",
      username: "@phoenix",
      question: "What are the requirements for opening a new store?",
      time: "5 min ago",
      avatar: "/images/Avatar (1).svg",
    },
    {
      name: "Koray Okumus",
      username: "@koray",
      question: "How do I manage inventory effectively?",
      time: "4 hr ago",
      avatar: "/images/Avatar.svg",
    },
  ];

  return (
    <div className="bg-white p-3  shadow font-inter rounded-lg ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-black">
          Pending Questions
        </h2>
        <span className="bg-[#2FBDFF] text-white text-xs font-light px-2 py-1 rounded-sm">
          02
        </span>
      </div>
      <ul className="space-y-4">
      {questions.map((q, index) => (
  <li key={index} className="flex items-start justify-between">
    <div className="flex items-start">
      <div className="relative mr-4">
        <img
          src={q.avatar}
          alt={q.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></span>
      </div>
      <div>
        <p className="font-medium text-[#344054]">{q.name}</p>
        <p className="text-[#475467] text-sm">{q.username}</p>
        <p className="text-[#475467] text-sm mt-1">{q.question}</p>
      </div>
    </div>
    <span className="text-[#475467] text-sm">{q.time}</span>
  </li>
))}
      </ul>
    </div>
  );
}