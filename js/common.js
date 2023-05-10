

// $("#btn").on("click", function () {

//     //乱数を生成
//     const randomNumber = Math.floor(Math.random() * 6 + 1);

//     //if分岐処理（質問）
//     let view = "";
//     if (randomNumber === 1) {
//         // 質問１が表示されるようにする
//         view = '質問１';

//     } else if (randomNumber === 2) {
//         // 質問2が表示されるようにする
//         view = '質問2';


//     } else if (randomNumber === 3) {
//         // 質問3が表示されるようにする
//         view = '質問3';


//     } else if (randomNumber === 4) {
//         // 質問4が表示されるようにする
//         view = '質問4';

//     } else if (randomNumber === 5) {
//         // 質問5が表示されるようにする
//         view = '質問5';


//     } else if (randomNumber === 6) {
//         // 質問6が表示されるようにする
//         view = '質問6';

//     }


//     //表示処理
//     $("#echo").html(view);

// });

const questions = [
    {
        question: "あなたの趣味は何ですか？",
        choices: ["読書", "スポーツ観戦", "旅行", "音楽鑑賞"]
    },
    {
        question: "好きな食べ物は何ですか？",
        choices: ["ラーメン", "寿司", "カレー", "焼肉"]
    },
    {
        question: "今一番欲しいものは何ですか？",
        choices: ["スマートフォン", "腕時計", "パソコン", "自転車"]
    },
    {
        question: "あなたの夢は何ですか？",
        choices: ["海外旅行", "起業", "留学", "資格取得"]
    },
    {
        question: "一番思い出に残っている旅行先はどこですか？",
        choices: ["ハワイ", "パリ", "京都", "オーストラリア"]
    },
    {
        question: "一番好きな映画は何ですか？",
        choices: ["タイタニック", "ハリーポッター", "スターウォーズ", "トイ・ストーリー"]
    }
];

const selectedQuestions = [];
while (selectedQuestions.length < 3) {
    const index = Math.floor(Math.random() * questions.length);
    if (!selectedQuestions.includes(index)) {
        selectedQuestions.push(index);
    }
}

for (let i = 0; i < selectedQuestions.length; i++) {
    const selectedQuestion = questions[selectedQuestions[i]];
    const selectedChoice = selectedQuestion.choices[Math.floor(Math.random() * selectedQuestion.choices.length)];
    console.log((i + 1) + "番目の質問：" + selectedQuestion.question);
    console.log("選択肢：" + selectedQuestion.choices.join(", "));
    console.log("あなたの回答：" + selectedChoice);
}

