/**
 * CC的学习记录
 * @type {{math: number, economics: number, computer: number, physics: number, physicalExercise: number, english: {hearing: number, reading: number, seeing: number, writing: number, grammar: number, word: number, speaking: number, value: number}}}
 */
// 本周目标设定
let weekScore = {math:100, economics:50, computer:320, physics:20, physicalExercise:24,
    english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,word:0,speaking:0,value:100}};
// 礼物列表
let giftList=[
    {name:"きゃらふぉるむ+ saber F/GO", value:289},
    {name:"Air Jordan 1 Rare Air", value:709},
    {name:"ikbc keyboard", value:328},
    {name:"SlamDunk Comic", value:228},
    {name:"Air Jordan 6 Sport Blue", value:1399},
    {name:"ipad pro 12.0", value:8376},
    {name:"Apple watch", value:3288},
    {name:"psv", value:1299},
    {name:"pspgo", value:990},
];
// 每日学习时间记录
let dataArr=[
    {   year:2017,month:12,date:23,
        math:0, economics:0, computer:80, physics:0, physicalExercise:0,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:2,value:0},
    },
    {   year:2017,month:12,date:22,
        math:0, economics:0, computer:70, physics:0, physicalExercise:1,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:6,value:0},
    },
    {   year:2017,month:12,date:21,
        math:5, economics:0, computer:6, physics:0, physicalExercise:2,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:20,
        math:0, economics:0, computer:0, physics:0, physicalExercise:7,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:19,
        math:0, economics:0, computer:30, physics:0, physicalExercise:1,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:18,
        math:0, economics:0, computer:30, physics:0, physicalExercise:1,
        english:{hearing:0,reading:10,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:17,
        math:0, economics:0, computer:10, physics:0, physicalExercise:7,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:16,
        math:0, economics:0, computer:20, physics:0, physicalExercise:1,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:15,
        math:0, economics:0, computer:30, physics:0, physicalExercise:1,
        english:{hearing:0,reading:10,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:12,date:14,
        math:0, economics:0, computer:100, physics:0, physicalExercise:7,
        english:{hearing:0,reading:10,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:12,date:13,
        math:20, economics:0, computer:30, physics:0, physicalExercise:1,
        english:{hearing:0,reading:10,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:12,
        math:12, economics:0, computer:50, physics:0, physicalExercise:1,
        english:{hearing:0,reading:10,seeing:0,writing:0,grammar:0,speaking:0,word:1,value:0},
    },
	{   year:2017,month:12,date:11,
        math:40, economics:0, computer:22, physics:0, physicalExercise:6,
        english:{hearing:0,reading:22,seeing:0,writing:0,grammar:0,speaking:0,word:2,value:0},
    },
	{   year:2017,month:12,date:10,
        math:0, economics:0, computer:0, physics:0, physicalExercise:0,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:12,date:9,
        math:0, economics:0, computer:0, physics:0, physicalExercise:6,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:12,date:8,
        math:0, economics:0, computer:0, physics:0, physicalExercise:1,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:12,date:7,
        math:0, economics:0, computer:0, physics:0, physicalExercise:1,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:12,date:6,
        math:3, economics:0, computer:12, physics:0, physicalExercise:1,
        english:{hearing:0,reading:12,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:5,
        math:7, economics:0, computer:33, physics:0, physicalExercise:7,
        english:{hearing:0,reading:33,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:4,
        math:0, economics:0, computer:24, physics:0, physicalExercise:1,
        english:{hearing:0,reading:24,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:3,
        math:0, economics:0, computer:1, physics:0, physicalExercise:1,
        english:{hearing:0,reading:1,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:2,
        math:0, economics:0, computer:3, physics:0, physicalExercise:6,
        english:{hearing:0,reading:3,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:12,date:1,
        math:0, economics:0, computer:20, physics:0, physicalExercise:1,
        english:{hearing:0,reading:5,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:30,
        math:0, economics:0, computer:40, physics:0, physicalExercise:1,
        english:{hearing:0,reading:15,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:29,
        math:0, economics:0, computer:41, physics:0, physicalExercise:7,
        english:{hearing:0,reading:16,seeing:1,writing:0,grammar:0,speaking:0,word:1,value:0},
    },
    {   year:2017,month:11,date:28,
        math:0, economics:0, computer:1, physics:0, physicalExercise:1,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:1,value:0},
    },
	{   year:2017,month:11,date:27,
        math:0, economics:0, computer:40, physics:0, physicalExercise:1,
        english:{hearing:0,reading:3,seeing:0,writing:0,grammar:0,speaking:0,word:1,value:0},
    },
	{   year:2017,month:11,date:26,
        math:1, economics:0, computer:1, physics:0, physicalExercise:6,
        english:{hearing:0,reading:3,seeing:0,writing:0,grammar:0,speaking:0,word:2,value:0},
    },
	{   year:2017,month:11,date:25,
        math:0, economics:0, computer:0, physics:0, physicalExercise:0,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:24,
        math:0, economics:0, computer:10, physics:0, physicalExercise:1,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:23,
        math:0, economics:0, computer:29, physics:0, physicalExercise:1,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:22,
        math:0, economics:0, computer:49, physics:1, physicalExercise:7,
        english:{hearing:0,reading:20,seeing:1,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:21,
        math:0, economics:0, computer:14, physics:5, physicalExercise:1,
        english:{hearing:0,reading:14,seeing:5,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:20,
        math:0, economics:0, computer:15, physics:8, physicalExercise:1,
        english:{hearing:0,reading:15,seeing:8,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:19,
        math:0, economics:0, computer:0, physics:0, physicalExercise:4,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:18,
        math:0, economics:0, computer:0, physics:0, physicalExercise:0,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:17,
        math:0, economics:0, computer:0, physics:0, physicalExercise:1,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:16,
        math:0, economics:0, computer:10, physics:0, physicalExercise:1,
        english:{hearing:0,reading:10,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:15,
        math:12, economics:0, computer:32, physics:0, physicalExercise:1,
        english:{hearing:0,reading:32,seeing:0,writing:0,grammar:9,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:14,
        math:3, economics:0, computer:13, physics:0, physicalExercise:6,
        english:{hearing:0,reading:16,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:13,
        math:40, economics:0, computer:12, physics:0, physicalExercise:1,
        english:{hearing:0,reading:50,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:12,
        math:0, economics:0, computer:0, physics:0, physicalExercise:6,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:11,
        math:0, economics:0, computer:0, physics:0, physicalExercise:0,
        english:{hearing:0,reading:0,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:10,
        math:33, economics:0, computer:0, physics:0, physicalExercise:7,
        english:{hearing:0,reading:20,seeing:0,writing:0,grammar:1,speaking:0,word:1,value:0},
    },
    {   year:2017,month:11,date:9,
        math:0, economics:0, computer:33, physics:0, physicalExercise:1,
        english:{hearing:0,reading:33,seeing:0,writing:0,grammar:0,speaking:0,word:1,value:0},
    },
    {   year:2017,month:11,date:8,
        math:2, economics:3, computer:60, physics:0, physicalExercise:7,
        english:{hearing:0,reading:50,seeing:0,writing:0,grammar:0,speaking:0,word:2,value:0},
    },
    {   year:2017,month:11,date:7,
        math:0, economics:0, computer:46, physics:0, physicalExercise:1,
        english:{hearing:0,reading:40,seeing:0,writing:0,grammar:16,speaking:0,word:2,value:0},
    },
    {   year:2017,month:11,date:6,
        math:0, economics:0, computer:36, physics:0, physicalExercise:1,
        english:{hearing:0,reading:36,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:5,
        math:0, economics:0, computer:5, physics:0, physicalExercise:6,
        english:{hearing:0,reading:5,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
	{   year:2017,month:11,date:4,
        math:0, economics:0, computer:12, physics:0, physicalExercise:0,
        english:{hearing:0,reading:12,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:3,
        math:0, economics:0, computer:28, physics:0, physicalExercise:7,
        english:{hearing:0,reading:28,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:2,
        math:0, economics:0, computer:52, physics:0, physicalExercise:1,
        english:{hearing:0,reading:52,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:11,date:1,
        math:0, economics:0, computer:46, physics:0, physicalExercise:7,
        english:{hearing:0,reading:46,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:10,date:31,
        math:0, economics:0, computer:43, physics:0, physicalExercise:1,
        english:{hearing:0,reading:43,seeing:0,writing:0,grammar:0,speaking:0,word:0,value:0},
    },
    {   year:2017,month:10,date:30,
        math:0, economics:0, computer:60, physics:0, physicalExercise:7,
        english:{hearing:4,reading:50,seeing:1,writing:0,grammar:0,speaking:0,word:2,value:0},
    },
];


