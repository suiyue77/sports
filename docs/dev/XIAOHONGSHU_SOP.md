# 小红书运动资料检索与笔记保存 SOP

Status: current · 2026-11-28
适用：Sports 的排球、健身、棒球技术学习、装备和维护资料。已验证技术路线来自 [Polariod Studio 完整 SOP](https://github.com/suiyue77/polariod-studio/blob/main/docs/dev/XIAOHONGSHU_SOP.md)，平台操作与详细成功/失败案例由该处维护；本文件拥有运动项目的应用与验收要求。**Sports 尚未开展小红书实际采集，也未新增笔记集合或网站内容。**

## 1. 启动与检索

- 先确定主题（例如排球接发球、轮转、健身动作、棒球守备、装备使用/维修）和所需证据。公开搜索和官方资料优先；若普通搜索无法读取小红书原帖，使用已授权的 Chrome + Kimi WebBridge，读取当前安装 Skill 与 [官方工具说明](https://www.kimi.com/products/kimi-webbridge)。Agent Reach / OpenCLI / xiaohongshu-cli 仅是候选，本案例没有安装实测；无必要不新增依赖。
- 本机默认服务健康检查示例：`curl -fsS --max-time 5 http://127.0.0.1:10086/status`。依据当前状态确定真实地址、extension_connected、tab_id_arg 和 tab_lifecycle。新建独立任务标签组、一任务一 session，明确 tabId；snapshot / find / read_page 或 evaluate 只看必要的可见 DOM。用户自行完成登录、人机验证；不得导出 Cookie、调用未授权私有 API、构造签名或绕过实际拒绝。真实 401/403/429 或挑战即停止相关操作。
- 用页面搜索框正常检索，或 `https://www.xiaohongshu.com/search_result?keyword=<encoded-query>`，从关键词逐步收窄至原标题+作者。记录真实卡片的 note ID、标题、作者和主题，通过可见标题链接打开详情核对，再读正文及相关评论。历史 DOM 线索：`section.note-item`、`a.title`、`a.author`、`a.cover img`、`#detail-title`、`#detail-desc`，每次先核实当前页面，不用历史选择器盲点。
- 只有用户明确授权相关收藏/关注读取时才浏览；正常滚动，按 ID 跨视口累积去重，直到真实列表稳定并核对缺项。昵称/简介只是线索，实际作品才证明相关。默认不点击关注、取关、回关、移除粉丝、点赞、收藏、评论、发送或私信，不读取无关私人记录。若明确要求私人关系快照，仅本地私有保存必要字段并核对前后显示值；不把账号关系写入公共仓库。

## 2. 保存与访问验证

1. 保存公开元数据：note_id、title、author、主题、裸身份 URL；区分 title-only / topic-verified / body-reviewed，读正文后才允许原创摘要。未读图文、视频或评论不是证据。身份与实际访问 URL 分开。
2. **外链**：裸 /explore/<id> 实测可能 404。正常打开真实卡片，使用小红书原生分享面板中明确的「复制链接」操作，只复制，不选联系人或发送。工具 click success 不足以证明复制成功，核对平台提示和刚复制的目标；无确认不使用旧剪贴板。另一个正常登录工作标签页打开官方分享地址，核对 exact ID/title；匿名状态单独记录。只保留明确生成用于公开分享的符合当前项目安全验证的地址，不复制内部导航签名、账号标识、登录参数、不构造 token。详细同源、同 ID、参数格式与失败修复参见 [Studio 的 link resolver](https://github.com/suiyue77/polariod-studio/blob/main/src/lib/note-links.mjs)。不能直达时以原题+作者搜索为主、精确标题搜索备用，明确「查找原帖」。分享链接可能过期。
3. **封面**：必须是真实对应卡片封面，不用自制主题图替代。核对 ID、标题、作者、已加载 img 及实际尺寸。仅在真实许可覆盖时保存匿名可访问公开原始缩略图，验证 HTTPS 来源、MIME、大小、尺寸和 SHA-256；保留构图、水印与署名。拒绝访问就停止，不换工具绕过。保存许可范围、来源、核验日期、文件哈希；无许可/无可用源图显示缺失。
4. **正文与其他图像**：索引+合规原创摘要优先；仅在权利人许可明确覆盖、用户要求该类内容且范围合法时收录原文/其他照片。非商业学习声明不等于授权；摄影项目的头像、笔记素材许可不继承到 Sports。禁止发布账号关系、私有收藏夹地址、凭据或临时观察原始数据。只存可公开的必要记录，按 note ID 幂等去重。

## 3. Sports 特有的资料质量门槛

| 资料 | 核验原则 |
|---|---|
| 排球规则、轮转、站位 | 以 [FIVB 官方规则](https://www.fivb.com/volleyball/the-game/official-volleyball-rules/) 及适用赛事版本为准；规则与训练建议分开 |
| 健身动作、训练量、恢复 | 官方身体活动指南（例如 [CDC](https://www.cdc.gov/physical-activity-basics/guidelines/adults.html)）和有可信证据的专业资料；区分一般练习建议与个体训练/健康建议，不用短视频证明伤病治疗或安全性 |
| 棒球规则、技术、战术 | 以 [MLB 官方规则与术语](https://www.mlb.com/glossary/rules) 或适用联盟的官方规则核验；不把单次比赛经验变成普适规则 |
| 装备使用及维修 | 区分用户观察、作者经验、品牌说明、维修报价、已验证结论；关注型号/版本/适用条件，危险操作须有可靠依据 |

按 [Wish](../wish/LATEST.md) 建设运动知识库，不发展为个人健康档案、实时比分或个体医疗/训练处方。笔记的点赞量、关注数和作者自称不能代替证据；必要时保留相反案例和适用限制。

## 4. 落盘及发布（待实际实施）

当前项目实际只有 [guides collection](../../src/content.config.ts)、[sports.ts](../../src/data/sports.ts) 及 [Reader](../../src/lib/agent-reader.ts)。未创建 readingNotes、笔记路由、媒体采集脚本或专属许可文件；不要假设 Studio 文件已经存在。将来得到收录授权后，先复用现有内容 owner、设计和 schema；若需要独立笔记索引，可参考 Studio 的身份/阅读等级/分享/封面授权字段，但由 Sports 维护具体分类、数据 schema、许可范围及前台入口。不得把另一仓库的真实素材、私有账户数据、历史分享参数直接复制过来。

验收：核对每项证据、唯一 ID、来源和许可；逐个真实打开新/变化外链，记录登录/匿名条件与失败；图片逐个解码、对照源图哈希、实际桌面/手机布局，所有入口与 Reader 一致。根据 [Dev](LATEST.md) 执行构建/Reader/相关浏览器验收、正常 PR exact-head CI 和生产读回（实际有网站改动才执行相应层）。仅保存 SOP 不触发新的资料采集或修改网站。

## 5. 已验证的借鉴案例

以下结果来自 **摄影站**，不是 Sports 已通过的验收：

| 成功/失败经验 | Sports 的预防措施 |
|---|---|
| 普通搜索无法稳定访问笔记；WebBridge 已读原帖及部分评论 | 复用正常登录网页，不默认安装新后端 |
| 30 项可见 DOM 不等于集合全量；滚动累计 51 条、选 47 条 | 跨视口按 ID 去重并核对未确认项 |
| 裸 ID 链接 404，原生分享后 47/47 在登录状态真实打开（[PR #11](https://github.com/suiyue77/polariod-studio/pull/11)） | 实际核对目标页，而非只查本地 href 或 HTTP 200 |
| 自制封面曾通过测试但被用户纠正；47/47 真实原帖封面与源哈希一致、32/32 页面测试通过（[PR #13](https://github.com/suiyue77/polariod-studio/pull/13)） | 用源图验收，不用合成图代替原帖 |
| 许可规则修改与真实内容发布分开（[PR #12](https://github.com/suiyue77/polariod-studio/pull/12)） | 许可明确范围后才落盘，不将公开/非商用视为自动许可 |

限制：本流程可迁移，但运动方向的相关性、数据结构、账号访问、版权和真实读者效果须在 Sports 的后续授权任务中独立验证。原帖长期可用性和匿名访问不保证。完整平台操作步骤、历史失败和回归测试实现见上方 Studio SOP。
