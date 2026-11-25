# Design · Sports

深绿、米白和少量亮绿，系统无衬线字、克制运动场线稿。首页引导、栏目目录和文章阅读分别承担不同任务。复用共享 Base 布局及 CSS；原创图形只作示意。

**Executable owner:** [global.css](../../src/styles/global.css) and [shared layout](../../src/layouts/Base.astro). Change shared semantic roles there rather than creating a duplicate global token table. Preserve existing ordinary-page hierarchy, readable line length, native links, visible focus, contrast, and responsive behavior. Test desktop 1440×900 and mobile 440×956 CSS pixels (DPR3/touch), including the actual primary controls; a simulator is not a physical-phone test. The current light design is intentional; dark mode has not been independently qualified and is not a release claim.

Read [Wish interpretation](../wish/DESIGN.md) before navigation/product changes. No approved aesthetic redesign is implied by this document.
