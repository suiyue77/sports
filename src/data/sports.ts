export const sports=[
 {id:'volleyball',name:'排球',en:'Volleyball',number:'01',accent:'court',tagline:'从接好第一球开始。',description:'理解轮转、比赛规则与基本技术，建立真正能用在球场上的知识。',source:'FIVB 国际排联',url:'https://www.fivb.com/volleyball/the-game/official-volleyball-rules/'},
 {id:'fitness',name:'健身',en:'Fitness',number:'02',accent:'track',tagline:'稳定训练，长期进步。',description:'从动作质量、训练负荷和恢复入手，建立可以坚持的运动习惯。',source:'CDC 身体活动指南',url:'https://www.cdc.gov/physical-activity-basics/guidelines/adults.html'},
 {id:'baseball',name:'棒球',en:'Baseball',number:'03',accent:'field',tagline:'看懂每一个攻守回合。',description:'从出局、跑垒和守备位置开始，逐步理解棒球的节奏和战术。',source:'MLB 官方规则与术语',url:'https://www.mlb.com/glossary/rules'}
] as const;
export type Sport=typeof sports[number];
