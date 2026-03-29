
import { Lesson } from './lessons-part1';

export const lessonsPart3: Lesson[] = [
  {
    slug: '22-claude-md-deep-dive',
    title: 'CLAUDE.md 深度指南',
    navTitle: '22 CLAUDE.md 深度指南',
    type: '講義',
    content: `
      <p>
        CLAUDE.md 是 Claude Code 社群中討論度最高的功能之一。它是一個特殊的 Markdown 檔案，讓你可以為
        Claude 提供持久化的專案指令、編碼規範和上下文資訊。簡單來說，CLAUDE.md 就是你寫給 AI 的「開發者手冊」。
      </p>

      <h2>為什麼 CLAUDE.md 很重要？</h2>
      <p>
        每次你啟動一個新的 Claude Code 會話，Claude 都會自動讀取 CLAUDE.md 檔案。這意味著你不需要在每次對話
        開頭重複說明專案的架構、命名規範或測試策略。它讓 Claude 從第一條訊息開始就「了解」你的專案。
      </p>

      <h2>層級結構</h2>
      <p>
        CLAUDE.md 支援三個層級，Claude 會按順序載入所有找到的檔案：
      </p>
      <ol>
        <li><strong><code>~/.claude/CLAUDE.md</code></strong>（全域級）：適用於你所有專案的通用偏好，例如「我偏好繁體中文回應」或「使用 ESLint + Prettier」</li>
        <li><strong>專案根目錄 <code>CLAUDE.md</code></strong>（專案級）：專案特定的架構說明、依賴管理和編碼規範</li>
        <li><strong>子目錄 <code>CLAUDE.md</code></strong>（目錄級）：某個子模組或套件的特定規則，例如 <code>packages/api/CLAUDE.md</code></li>
      </ol>
      <p>
        當多個層級的 CLAUDE.md 同時存在時，Claude 會合併所有內容。子目錄的規則只在你工作於該目錄下的檔案時生效。
      </p>

      <h2>應該放什麼內容？</h2>
      <p>以下是社群驗證過的最佳實踐分類：</p>
      <ul>
        <li><strong>編碼規範</strong>：命名慣例、import 順序、檔案結構偏好</li>
        <li><strong>專案架構</strong>：目錄結構說明、核心模組關係圖</li>
        <li><strong>測試模式</strong>：測試框架選擇、測試命令、覆蓋率要求</li>
        <li><strong>常見錯誤提醒</strong>：「不要使用 any 型別」、「所有 API 回應都需包裝在 Result 型別中」</li>
        <li><strong>建置與部署</strong>：建置命令、環境變數說明、部署流程</li>
      </ul>

      <h2>React/TypeScript 專案範本</h2>
      <pre><code># Project: My App

## Architecture
- Frontend: React 18 + TypeScript + Vite
- State: Zustand for global state, React Query for server state
- Styling: Tailwind CSS v4
- Testing: Vitest + React Testing Library

## Coding Conventions
- Use functional components with hooks only
- Prefer named exports over default exports
- File naming: kebab-case for files, PascalCase for components
- IMPORTANT: Always use \`const\` over \`let\` unless reassignment is needed

## Testing
- Run tests: \`npm run test\`
- Run single test: \`npx vitest run src/path/to/test.ts\`
- YOU MUST run relevant tests before committing changes

## Mistakes to Avoid
- DO NOT use \`any\` type — use \`unknown\` and narrow with type guards
- DO NOT import from barrel files (index.ts) in the same package
- DO NOT use inline styles — use Tailwind classes
- DO NOT commit console.log statements</code></pre>

      <h2>最佳實踐</h2>
      <ul>
        <li><strong>控制長度</strong>：保持在 2000 tokens 以內。過長的 CLAUDE.md 會佔用寶貴的上下文空間</li>
        <li><strong>使用強調標記</strong>：對關鍵規則使用 <code>IMPORTANT:</code> 或 <code>YOU MUST</code>，這些標記會讓 Claude 更嚴格地遵守</li>
        <li><strong>具體而非抽象</strong>：寫「使用 Vitest 而非 Jest」而非「使用適當的測試框架」</li>
        <li><strong>定期更新</strong>：隨著專案演進更新 CLAUDE.md，移除過時的規則</li>
      </ul>

      <h2>常見錯誤</h2>
      <ul>
        <li><strong>檔案臃腫</strong>：把整個 README 或 API 文檔塞進去。CLAUDE.md 是指令，不是文檔</li>
        <li><strong>規則衝突</strong>：全域級說「用分號」，專案級說「不用分號」。確保層級間規則一致</li>
        <li><strong>放入臨時資訊</strong>：「今天的部署版本是 v1.2.3」這類資訊不適合放在 CLAUDE.md 中</li>
        <li><strong>忽略 Mistakes to Avoid</strong>：社群發現，明確列出「不要做什麼」比只列出「要做什麼」更有效</li>
      </ul>

      <h2>「Mistakes to Avoid」模式</h2>
      <p>
        這是社群最受歡迎的 CLAUDE.md 模式。與其告訴 Claude「如何寫好的代碼」，不如明確列出常見的錯誤。
        Claude 對否定指令的遵守度非常高，特別是搭配 <code>DO NOT</code> 或 <code>NEVER</code> 標記時。
      </p>
      <p>
        建議在每次 Claude 犯錯後，將該錯誤添加到 CLAUDE.md 的 Mistakes to Avoid 區塊中，
        這樣它就不會再犯同樣的錯誤。
      </p>
    `
  },
  {
    slug: '23-skills-system',
    title: 'Skills 系統',
    navTitle: '23 Skills 系統',
    type: '講義',
    content: `
      <p>
        Skills 是 Claude Code 中一種可重複使用的、基於 Prompt 的能力擴展機制。
        它們以 <code>SKILL.md</code> 格式定義，讓 Claude 在需要時自動發現並使用特定的工作流程。
      </p>

      <h2>Skills 與 Custom Commands 的區別</h2>
      <p>
        這是最常見的混淆點。兩者的核心區別在於觸發方式：
      </p>
      <ul>
        <li><strong>Custom Commands</strong>（<code>.claude/commands/</code>）：由使用者透過斜線命令手動觸發，例如 <code>/project:deploy</code>。適合「我想要做 X」的場景</li>
        <li><strong>Skills</strong>（<code>.claude/skills/</code>）：由 AI 自動發現並在需要時觸發。適合「當 Claude 遇到 Y 情境時，應該用 Z 方法」的場景</li>
      </ul>
      <p>決策樹：</p>
      <ul>
        <li>使用者需要明確觸發？→ Custom Command</li>
        <li>AI 應該自動識別何時使用？→ Skill</li>
        <li>需要標準化的工作流程？→ 兩者都可以，但 Skill 更靈活</li>
      </ul>

      <h2>創建自定義 Skill</h2>
      <p>
        在專案的 <code>.claude/skills/</code> 目錄下建立 Markdown 檔案：
      </p>
      <pre><code># .claude/skills/deploy.md
---
name: deployment-skill
description: Handle deployment to production and staging environments
when: User asks about deploying, releasing, or pushing to production
---

## Deployment Workflow

1. Run all tests first: \`npm run test\`
2. Build the project: \`npm run build\`
3. Check for TypeScript errors: \`npx tsc --noEmit\`
4. If deploying to staging:
   - Run: \`npm run deploy:staging\`
5. If deploying to production:
   - Confirm with user first
   - Run: \`npm run deploy:prod\`
   - Create a git tag for the release</code></pre>
      <p>
        frontmatter 中的 <code>when</code> 欄位告訴 Claude 何時該啟用這個 Skill。
        當使用者的請求匹配到這個描述時，Claude 會自動載入該 Skill 的指令。
      </p>

      <h2>內建 Skills</h2>
      <p>Claude Code 預裝了多個實用的內建 Skill：</p>
      <ul>
        <li><strong>/commit</strong>：智慧提交——分析變更、生成有意義的 commit message、遵循專案規範</li>
        <li><strong>/review-pr</strong>：審查 Pull Request——分析代碼變更、提出改善建議</li>
        <li><strong>/simplify</strong>：簡化代碼——檢查重複、品質和效率問題</li>
        <li><strong>/claude-api</strong>：幫助使用 Anthropic SDK 構建應用</li>
      </ul>

      <h2>Skills 的通用格式</h2>
      <p>
        Skills 採用通用的 Markdown 格式，這意味著同一個 Skill 可以在不同的 AI 工具中使用。
        目前支援 Skills 格式的工具包括：
      </p>
      <ul>
        <li>Claude Code</li>
        <li>Cursor</li>
        <li>Gemini CLI</li>
      </ul>
      <p>
        這種跨平台相容性意味著你為 Claude Code 編寫的 Skill，團隊中使用其他工具的成員也能受益。
      </p>

      <h2>範例：資料庫遷移 Skill</h2>
      <pre><code># .claude/skills/db-migration.md
---
name: database-migration
description: Create and run database migrations safely
when: User needs to modify database schema or create migrations
---

## Database Migration Workflow

### Creating a Migration
1. Generate migration file: \`npx prisma migrate dev --name descriptive_name\`
2. Review the generated SQL in \`prisma/migrations/\`
3. Ensure migration is reversible

### Safety Checks
- NEVER drop columns in production without a multi-step migration
- Always add new columns as nullable first
- Test migration on a copy of production data first</code></pre>

      <h2>最佳實踐</h2>
      <ul>
        <li>每個 Skill 聚焦一個明確的任務領域</li>
        <li>在 <code>when</code> 欄位中使用具體的觸發描述</li>
        <li>包含具體的命令和步驟，不要只寫抽象原則</li>
        <li>將 Skills 提交到版本控制中，讓團隊共享</li>
      </ul>
    `
  },
  {
    slug: '24-session-memory',
    title: 'Session Memory 自動記憶',
    navTitle: '24 Session Memory',
    type: '講義',
    content: `
      <p>
        從 v2.1.59 版本開始，Claude Code 引入了自動記憶功能（Session Memory）。
        這個功能讓 Claude 能夠在不同會話之間記住重要的上下文和偏好，
        大幅減少了每次開啟新會話時的重複說明。
      </p>

      <h2>自動記憶如何運作？</h2>
      <p>
        在每次會話中，Claude 會觀察你的互動模式、偏好和反饋。當會話累積到一定長度後（大約 10,000 tokens），
        Claude 會自動提取有價值的記憶並儲存。你會看到以下提示：
      </p>
      <ul>
        <li><strong>會話開始時</strong>：<code>Recalled X memories</code>——Claude 載入了之前保存的記憶</li>
        <li><strong>會話進行中</strong>：<code>Wrote X memories</code>——Claude 從當前對話中提取並保存了新記憶</li>
      </ul>

      <h2>記憶類型</h2>
      <p>Claude 會自動分類和儲存不同類型的記憶：</p>
      <ul>
        <li><strong>user</strong>：使用者偏好，例如「偏好繁體中文」、「喜歡簡潔的 commit message」</li>
        <li><strong>feedback</strong>：來自使用者的修正和反饋，例如「不要在函數名前加底線」</li>
        <li><strong>project</strong>：專案相關知識，例如「此專案使用 monorepo 架構」</li>
        <li><strong>reference</strong>：參考資訊，例如「部署腳本在 scripts/deploy.sh」</li>
      </ul>

      <h2>首次記憶提取</h2>
      <p>
        記憶提取並非每輪對話都會觸發。第一次提取通常在會話達到約 10,000 tokens 後才會發生。
        這是為了確保 Claude 有足夠的上下文來做出有意義的記憶判斷，而不是記住瑣碎的細節。
      </p>

      <h2>手動添加記憶</h2>
      <p>
        你可以使用 <code>#</code> 前綴來明確告訴 Claude 記住某件事：
      </p>
      <pre><code># Remember that our API uses snake_case for all endpoints
# Our CI pipeline requires all tests to pass before merge
# The legacy module in src/old/ should not be modified</code></pre>
      <p>
        使用 <code>#</code> 標記的訊息會被優先保存為記憶，不需要等待自動提取。
      </p>

      <h2>Memory 與 CLAUDE.md 的關係</h2>
      <p>
        初學者常常混淆這兩個功能。它們的定位不同：
      </p>
      <ul>
        <li><strong>CLAUDE.md</strong> = <strong>指令</strong>。你主動編寫的規則和規範，每次會話都會載入。適合團隊共享的專案標準</li>
        <li><strong>Memory</strong> = <strong>學習到的上下文</strong>。Claude 從互動中自動學到的知識。個人化，不適合團隊共享</li>
      </ul>
      <p>
        兩者互補：CLAUDE.md 定義「應該怎麼做」，Memory 記住「上次做了什麼、你喜歡什麼」。
      </p>

      <h2>記憶檔案結構</h2>
      <p>
        記憶儲存在 <code>~/.claude/projects/</code> 目錄下，按專案路徑組織：
      </p>
      <pre><code>~/.claude/
├── projects/
│   ├── Users-erik-my-project/
│   │   ├── memories.jsonl      # 專案級記憶
│   │   └── ...
│   └── Users-erik-another-project/
│       ├── memories.jsonl
│       └── ...
└── memories.jsonl              # 全域記憶</code></pre>
      <p>
        你可以直接查看和編輯這些檔案，但通常不需要手動干預。
        如果某條記憶不再正確，你可以在會話中告訴 Claude「忘記關於 X 的記憶」。
      </p>

      <h2>實用技巧</h2>
      <ul>
        <li>在新專案的第一次會話中，多花時間解釋你的偏好——這些都會被記住</li>
        <li>當 Claude 犯錯時，明確糾正它。這個反饋會被記為 feedback 類型的記憶</li>
        <li>定期檢查 <code>~/.claude/projects/</code> 下的記憶檔案，清理過時的記憶</li>
      </ul>
    `
  },
  {
    slug: '25-plan-mode-and-thinking',
    title: 'Plan Mode 與延伸思考',
    navTitle: '25 Plan Mode 與思考',
    type: '講義',
    content: `
      <p>
        Claude Code 提供了兩種強大的機制來提升複雜任務的處理品質：Plan Mode（計劃模式）
        和 Extended Thinking（延伸思考）。善用這兩個功能，可以讓 Claude 在動手之前「想清楚」。
      </p>

      <h2>什麼是 Plan Mode？</h2>
      <p>
        Plan Mode 是一種唯讀的探索模式。在此模式下，Claude 只會讀取檔案和分析代碼，
        不會進行任何修改。你可以透過 <strong>Shift+Tab</strong> 快捷鍵在 Plan Mode 和正常模式之間切換。
      </p>
      <p>Plan Mode 的界面會顯示一個明確的標記，讓你知道目前處於計劃模式。</p>

      <h2>何時使用 Plan Mode？</h2>
      <ul>
        <li><strong>理解陌生代碼庫</strong>：在不知道從哪裡開始時，讓 Claude 先探索和解釋</li>
        <li><strong>大型重構前</strong>：在動手之前，讓 Claude 分析影響範圍和制定策略</li>
        <li><strong>評估方案</strong>：讓 Claude 比較不同的實現方案，而不立即執行</li>
        <li><strong>學習</strong>：純粹想了解某個模組的運作方式</li>
      </ul>
      <p>
        典型工作流是：先用 Plan Mode 理解問題和制定方案，然後按 Shift+Tab 退出 Plan Mode，
        再讓 Claude 按照制定的方案實施。
      </p>

      <h2>Extended Thinking（延伸思考）</h2>
      <p>
        延伸思考讓 Claude 在回應之前花更多時間進行深度推理。你可以透過特定的關鍵詞觸發不同級別的思考：
      </p>
      <ul>
        <li><strong><code>think</code></strong>：基礎思考，適合一般的問題分析</li>
        <li><strong><code>think hard</code></strong>：更深入的思考，適合中等複雜的問題</li>
        <li><strong><code>think harder</code></strong>：高強度思考，適合複雜的架構設計</li>
        <li><strong><code>ultrathink</code></strong>：最高級別思考，使用最多 31,999 tokens 的思考預算，適合最複雜的架構決策和系統設計</li>
      </ul>

      <h2>思考預算</h2>
      <p>
        每個思考級別對應不同的 token 預算。<code>ultrathink</code> 的 31,999 tokens 思考預算意味著
        Claude 可以在內部進行大量的推理和分析，然後才給出精心組織的回應。這對於需要考慮多個因素
        的複雜決策特別有用。
      </p>

      <h2>實際範例：重構任務</h2>
      <p>假設你需要將一個大型組件拆分成多個小組件：</p>
      <ol>
        <li>
          <strong>Step 1 - Plan Mode</strong>：按 Shift+Tab 進入計劃模式
          <pre><code>分析 src/components/Dashboard.tsx，這個組件太大了。
幫我制定一個拆分方案，列出應該拆成哪些子組件。</code></pre>
        </li>
        <li>
          <strong>Step 2 - 審查方案</strong>：Claude 會分析代碼，列出建議的拆分方案和每個子組件的職責
        </li>
        <li>
          <strong>Step 3 - 實施</strong>：按 Shift+Tab 退出計劃模式
          <pre><code>按照剛才的方案，開始拆分 Dashboard 組件。think hard about the implementation order to avoid breaking changes.</code></pre>
        </li>
      </ol>

      <h2>使用技巧</h2>
      <ul>
        <li>不需要每個問題都用 <code>ultrathink</code>——對簡單任務來說這浪費 token</li>
        <li>Plan Mode 適合「探索」，Extended Thinking 適合「深度分析」</li>
        <li>結合兩者：在 Plan Mode 中使用 <code>think hard</code> 來獲得最全面的分析</li>
        <li>複雜的跨系統問題值得用 <code>ultrathink</code>，簡單的 bug fix 用基本的 <code>think</code> 就夠了</li>
      </ul>
    `
  },
  {
    slug: '26-context-management-strategy',
    title: '上下文管理策略',
    navTitle: '26 上下文管理',
    type: '講義',
    content: `
      <p>
        上下文視窗（Context Window）是 Claude Code 最重要的資源。管理好上下文就像管理記憶體一樣——
        用完了就需要清理或重新開始。社群總結了一個非常實用的「上下文區域」框架。
      </p>

      <h2>Context Zones 框架</h2>
      <p>根據上下文使用百分比，你的會話處於不同的「區域」：</p>
      <ul>
        <li>
          <strong>綠色區域（0-50%）</strong>：自由工作區。可以放心地讀取大量檔案、進行複雜操作。
          這是最高效的工作階段
        </li>
        <li>
          <strong>黃色區域（50-70%）</strong>：注意區。開始關注上下文使用量，避免載入大型檔案。
          考慮是否需要精簡操作
        </li>
        <li>
          <strong>橙色區域（70-90%）</strong>：壓縮區。應該使用 <code>/compact</code> 命令來壓縮上下文。
          避免開始新的大型任務
        </li>
        <li>
          <strong>紅色區域（90%+）</strong>：危險區。使用 <code>/clear</code> 清空或開啟新會話。
          在此階段 Claude 的回應品質可能會下降
        </li>
      </ul>

      <h2>自動壓縮機制</h2>
      <p>
        Claude Code 會在上下文達到約 83.5%（約 167K tokens）時自動觸發壓縮。自動壓縮會保留最重要的
        上下文並移除冗餘的細節。但與手動使用 <code>/compact</code> 不同，自動壓縮無法自訂壓縮重點。
      </p>

      <h2>會話時長最佳實踐</h2>
      <p>
        社群經驗表明，30-45 分鐘的專注型會話是最理想的。原因是：
      </p>
      <ul>
        <li>短會話讓上下文保持新鮮，Claude 的回應品質更穩定</li>
        <li>每個會話專注一個明確的任務，避免上下文被不相關的資訊污染</li>
        <li>方便回顧——你可以清楚地知道每個會話完成了什麼</li>
      </ul>

      <h2>多會話工作流</h2>
      <p>
        對於大型任務，建議將其拆分為多個會話：
      </p>
      <ol>
        <li><strong>會話 1</strong>：分析問題和制定方案（使用 Plan Mode）</li>
        <li><strong>會話 2</strong>：實施核心邏輯</li>
        <li><strong>會話 3</strong>：撰寫測試</li>
        <li><strong>會話 4</strong>：代碼審查和修正</li>
      </ol>
      <p>
        每個會話開始時，簡要說明前一個會話的成果和當前任務即可。
        Claude 的 Session Memory 功能也會幫助保持跨會話的連續性。
      </p>

      <h2>「AI 上下文像牛奶一樣」</h2>
      <p>
        社群中流傳一句話：「AI context is like milk — keep it fresh.」
        意思是上下文越新鮮，Claude 的表現越好。陳舊的、雜亂的上下文會讓 Claude 的回應品質下降，
        就像過期的牛奶一樣不再可靠。
      </p>

      <h2>/compact 的進階用法</h2>
      <p>
        <code>/compact</code> 命令支援自訂 Prompt，讓你可以指定壓縮時保留什麼：
      </p>
      <pre><code>/compact 保留所有關於資料庫遷移的討論，移除關於 CSS 調整的內容</code></pre>
      <p>
        這比直接執行 <code>/compact</code> 更精準，因為你可以告訴 Claude 哪些上下文對接下來的工作最重要。
      </p>

      <h2>實用建議</h2>
      <ul>
        <li>養成檢查上下文使用百分比的習慣</li>
        <li>在橙色區域時主動使用 <code>/compact</code>，不要等到自動壓縮</li>
        <li>大型檔案能不載入就不載入——讓 Claude 搜索而非讀取整個檔案</li>
        <li>完成一個任務後，開新會話做下一個任務</li>
      </ul>
    `
  },
  {
    slug: '27-vscode-and-ide-integration',
    title: 'VS Code 與 IDE 整合',
    navTitle: '27 VS Code 與 IDE',
    type: '講義',
    content: `
      <p>
        雖然 Claude Code 以終端為主要介面，但它也提供了豐富的 IDE 整合選項。
        特別是 VS Code 擴充套件，為偏好圖形介面的開發者提供了完整的體驗。
      </p>

      <h2>VS Code 擴充套件安裝</h2>
      <p>安裝方式有兩種：</p>
      <ol>
        <li>在 VS Code 的擴充套件市場搜尋「Claude Code」並安裝</li>
        <li>或者在終端執行 <code>claude install-vscode-extension</code></li>
      </ol>
      <p>安裝後，你會在側邊欄看到 Claude Code 的面板圖標。</p>

      <h2>核心功能</h2>
      <ul>
        <li>
          <strong>圖形化聊天面板</strong>：在 VS Code 內直接與 Claude 對話，無需切換到終端。
          支援完整的 Claude Code 功能
        </li>
        <li>
          <strong>Inline Diff 檢視</strong>：Claude 的代碼修改會以行內差異的方式顯示，
          你可以逐個接受或拒絕每個變更
        </li>
        <li>
          <strong>Checkpoint 還原</strong>：每次 Claude 的修改都會建立一個檢查點，
          你可以隨時還原到任意一個之前的狀態
        </li>
      </ul>

      <h2>@ 提及功能</h2>
      <p>
        在聊天面板中，你可以使用 <code>@</code> 來引用各種上下文：
      </p>
      <ul>
        <li><strong>@file</strong>：引用特定檔案，例如 <code>@src/App.tsx</code></li>
        <li><strong>@folder</strong>：引用整個目錄</li>
        <li><strong>@terminal:name</strong>：引用終端的輸出內容，非常適合分享錯誤日誌</li>
      </ul>
      <p>
        這些 <code>@</code> 提及會被自動轉換為上下文，幫助 Claude 更精準地理解你的問題。
      </p>

      <h2>JetBrains 外掛</h2>
      <p>
        Claude Code 也支援 JetBrains 全系列 IDE：
      </p>
      <ul>
        <li>IntelliJ IDEA</li>
        <li>PyCharm</li>
        <li>WebStorm</li>
        <li>GoLand</li>
      </ul>
      <p>
        在 JetBrains 的外掛市場搜尋「Claude Code」即可安裝。功能與 VS Code 擴充套件類似，
        提供聊天面板和代碼整合。
      </p>

      <h2>終端 vs IDE：如何選擇？</h2>
      <p>
        兩種介面各有優勢：
      </p>
      <ul>
        <li>
          <strong>選擇終端</strong>：當你需要最大的靈活性、複雜的命令行操作、
          或在遠端伺服器上工作時
        </li>
        <li>
          <strong>選擇 IDE</strong>：當你想要視覺化的差異檢視、方便的檔案導航、
          或需要頻繁在代碼和對話之間切換時
        </li>
      </ul>
      <p>
        很多有經驗的使用者會同時使用兩者：在 IDE 中處理日常開發，
        需要複雜操作時切換到終端。
      </p>

      <h2>平行對話</h2>
      <p>
        在 VS Code 中，你可以同時開啟多個 Claude Code 面板，進行平行的對話。
        這對於同時處理不同功能或比較不同方案非常有用。每個面板都有獨立的上下文和會話。
      </p>

      <h2>實用技巧</h2>
      <ul>
        <li>善用 <code>@terminal:name</code> 分享錯誤信息，比複製貼上更方便</li>
        <li>使用 Checkpoint 功能大膽嘗試——隨時可以復原</li>
        <li>在 IDE 中配合 Claude 的 inline diff 進行逐行代碼審查</li>
      </ul>
    `
  },
  {
    slug: '28-claude-code-on-the-web',
    title: 'Claude Code on the Web',
    navTitle: '28 Web 與遠端',
    type: '講義',
    content: `
      <p>
        除了本地終端和 IDE 整合之外，Claude Code 也提供了基於瀏覽器的版本和多種遠端使用方式。
        這讓你可以在任何裝置上使用 Claude Code 的全部能力。
      </p>

      <h2>claude.ai/code — 瀏覽器版 Claude Code</h2>
      <p>
        訪問 <code>claude.ai/code</code> 即可在瀏覽器中使用 Claude Code。
        任務運行在 Anthropic 管理的雲端基礎設施上，無需本地安裝任何東西。
      </p>
      <p>核心功能：</p>
      <ul>
        <li>完整的 Claude Code 功能，包括檔案操作、命令執行、代碼生成</li>
        <li>連接 GitHub 倉庫：直接從瀏覽器中存取你的代碼</li>
        <li>多任務並行：可以同時提交多個任務，並行執行</li>
      </ul>

      <h2>Remote Control（遠端控制）</h2>
      <p>
        Remote Control 功能讓你可以從 <code>claude.ai/code</code> 或手機 App 連接到你的本地終端。
        這意味著你可以在手機上啟動一個任務，讓它在你的工作電腦上執行。
      </p>
      <p>使用場景：</p>
      <ul>
        <li>通勤時在手機上啟動耗時的重構任務</li>
        <li>在會議中用 iPad 監控正在運行的任務</li>
        <li>從任何有瀏覽器的裝置控制你的開發環境</li>
      </ul>

      <h2>Dispatch（任務派發）</h2>
      <p>
        Dispatch 讓你可以從手機向桌面電腦發送任務。打開 Claude 手機 App，
        描述你想要完成的任務，它會被發送到你的桌面 Claude Code 實例執行。
      </p>

      <h2><code>claude --remote</code>：終端中的雲端會話</h2>
      <p>
        如果你習慣使用終端，但想利用雲端的運算能力，可以使用：
      </p>
      <pre><code>claude --remote</code></pre>
      <p>
        這會在 Anthropic 的雲端環境中啟動一個 Claude Code 會話，
        但你仍然透過本地終端與之互動。適合處理需要大量運算或長時間運行的任務。
      </p>

      <h2>Desktop App</h2>
      <p>
        Claude Code 提供了 Mac 和 Windows 的桌面應用程式。桌面 App 結合了終端的靈活性
        和圖形介面的便利，是另一種使用 Claude Code 的方式。
      </p>

      <h2>選擇合適的使用方式</h2>
      <ul>
        <li><strong>本地終端</strong>：日常開發，需要完全控制和最低延遲</li>
        <li><strong>VS Code / IDE</strong>：需要視覺化差異檢視和 IDE 功能整合</li>
        <li><strong>claude.ai/code</strong>：無需本地安裝，適合輕量使用或從任何裝置存取</li>
        <li><strong>Remote Control</strong>：遠端控制本地環境，適合行動辦公</li>
        <li><strong>claude --remote</strong>：利用雲端運算力，處理大型任務</li>
      </ul>

      <h2>安全注意事項</h2>
      <p>
        使用雲端版本時，你的代碼會在 Anthropic 的伺服器上運行。
        如果你的專案有嚴格的資料安全要求，請確認你的組織政策是否允許使用雲端版本。
        對於敏感專案，建議使用本地終端版本搭配 API Key。
      </p>
    `
  },
  {
    slug: '29-debugging-and-tdd-workflows',
    title: '除錯與 TDD 工作流',
    navTitle: '29 除錯與 TDD',
    type: '講義',
    content: `
      <p>
        Claude Code 在除錯和測試驅動開發（TDD）方面表現出色。
        根據 Anthropic 的內部數據，在提示中包含測試命令可以將代碼品質提升 2-3 倍。
        本節介紹如何有效地利用 Claude Code 進行除錯和 TDD 工作流。
      </p>

      <h2>測試優先的方法</h2>
      <p>
        最有效的 Claude Code 工作流之一是「測試優先」。流程如下：
      </p>
      <ol>
        <li><strong>撰寫測試</strong>：先寫一個（會失敗的）測試，描述你期望的行為</li>
        <li><strong>讓 Claude 實現</strong>：告訴 Claude「讓這個測試通過」</li>
        <li><strong>迭代改進</strong>：如果測試不通過，Claude 會分析錯誤並修正</li>
      </ol>
      <pre><code>我寫了一個新的測試在 src/utils/__tests__/parser.test.ts。
請讓這個測試通過。運行 npm run test -- parser.test 來驗證。</code></pre>
      <p>
        關鍵在於：告訴 Claude 測試命令。這讓它能夠自動驗證結果，形成一個完整的反饋迴圈。
      </p>

      <h2>Playwright 瀏覽器測試</h2>
      <p>
        透過 Playwright MCP 伺服器，Claude 可以直接操作瀏覽器進行測試：
      </p>
      <ul>
        <li>打開網頁並截圖</li>
        <li>點擊按鈕、填寫表單</li>
        <li>驗證頁面內容和視覺效果</li>
        <li>檢查 Console 錯誤</li>
      </ul>
      <p>
        這對於前端開發特別有用——你可以讓 Claude 修改 CSS，然後自動截圖比較修改前後的效果。
      </p>

      <h2>截圖驅動的除錯</h2>
      <p>
        遇到 UI Bug 時，最有效的方法是直接截圖並貼到對話中：
      </p>
      <ol>
        <li>截取顯示 Bug 的畫面</li>
        <li>將截圖貼到 Claude Code（終端中可以直接貼圖，VS Code 中使用拖放）</li>
        <li>描述期望的行為</li>
      </ol>
      <p>Claude 會分析截圖，識別問題，然後提出修復方案。</p>

      <h2>錯誤日誌分析</h2>
      <p>
        對於後端或編譯錯誤，直接複製堆疊追蹤（Stack Trace）給 Claude 是最快的方式：
      </p>
      <pre><code>我在執行 npm run build 時遇到了這個錯誤：

TypeError: Cannot read properties of undefined (reading 'map')
    at UserList (src/components/UserList.tsx:15:23)
    at renderWithHooks (node_modules/react-dom/...)

請幫我修復這個問題。</code></pre>
      <p>
        Claude 會根據堆疊追蹤定位到有問題的檔案和行號，讀取相關代碼，然後提供修復。
      </p>

      <h2>除錯策略比較</h2>
      <p>
        兩種常見的除錯方式：
      </p>
      <ul>
        <li>
          <strong>「讀取錯誤，然後修復」</strong>：先讓 Claude 分析錯誤原因，解釋問題所在，
          然後再實施修復。適合你想要理解根本原因的情況
        </li>
        <li>
          <strong>「直接修復」</strong>：直接告訴 Claude 修復錯誤，不需要解釋。
          適合時間緊迫或問題明顯的情況
        </li>
      </ul>

      <h2>多檔案除錯技巧</h2>
      <p>
        當 Bug 跨越多個檔案時：
      </p>
      <ul>
        <li>提供完整的錯誤信息，包括堆疊追蹤</li>
        <li>告訴 Claude 哪些檔案最近被修改過</li>
        <li>使用 <code>think hard</code> 讓 Claude 深入分析依賴關係</li>
        <li>如果 Claude 的第一次修復沒有解決問題，把新的錯誤信息回饋給它</li>
      </ul>

      <h2>TDD 循環的最佳實踐</h2>
      <ul>
        <li>每次只寫一個測試案例，保持反饋迴圈小而快</li>
        <li>在 CLAUDE.md 中加入測試命令，這樣 Claude 會自動驗證</li>
        <li>讓 Claude 在修改後自動執行測試，不要手動驗證</li>
        <li>使用 <code>YOU MUST run tests before completing</code> 在 CLAUDE.md 中確保測試必定執行</li>
      </ul>
    `
  },
  {
    slug: '30-agent-teams-and-subagents',
    title: 'Agent Teams 與子代理',
    navTitle: '30 Agent Teams',
    type: '講義',
    content: `
      <p>
        Agent Teams 和子代理（Subagents）是 Claude Code 中的高級功能，讓你可以同時運行多個 Claude
        實例，各自處理不同的任務。這是應對大型複雜工作的利器。
      </p>

      <h2>什麼是子代理（Subagents）？</h2>
      <p>
        子代理是由主 Claude 會話委派的子任務執行者。每個子代理擁有獨立的上下文，
        專注於特定的任務。主代理可以：
      </p>
      <ul>
        <li>將大任務拆分成多個子任務</li>
        <li>分配子任務給不同的子代理</li>
        <li>彙總子代理的結果</li>
      </ul>

      <h2>內建子代理類型</h2>
      <ul>
        <li><strong>Plan</strong>：專門用於分析和制定計劃，不會執行任何修改</li>
        <li><strong>Explore</strong>：探索代碼庫，讀取檔案和搜索內容</li>
        <li><strong>Task</strong>：通用型子代理，可以執行完整的開發任務</li>
      </ul>

      <h2>背景子代理</h2>
      <p>
        背景子代理可以與你的主會話並行運行。當你啟動一個背景子代理時，
        系統會預先詢問所有需要的權限，這樣子代理就能在後台自主運行而不需要你的干預。
      </p>
      <p>
        例如，你可以讓一個子代理在後台運行測試套件，同時你繼續在主會話中開發新功能。
      </p>

      <h2>Agent Teams</h2>
      <p>
        Agent Teams 是在 2026 年 2 月推出的更進階功能。與子代理不同，
        Agent Teams 是真正的多代理協作系統：
      </p>
      <ul>
        <li><strong>一個領導 Claude</strong>：負責分配任務和協調團隊</li>
        <li><strong>多個隊員 Claude</strong>：各自獨立工作，可以直接互相溝通</li>
        <li><strong>共享任務列表</strong>：隊員可以自行從任務列表中選取任務</li>
      </ul>

      <h2>Agent Teams 的工作方式</h2>
      <p>
        每個團隊成員在獨立的 git worktree 中工作，這意味著他們的程式碼修改互不干擾。
        團隊成員之間可以直接對話和協調，不需要所有溝通都經過領導代理。
      </p>

      <h2>實際範例：多代理代碼審查</h2>
      <p>
        假設你有一個包含 20 個檔案變更的大型 PR。你可以啟動 4 個代理並行審查：
      </p>
      <ul>
        <li><strong>Agent 1</strong>：審查前端組件變更</li>
        <li><strong>Agent 2</strong>：審查 API 路由和控制器</li>
        <li><strong>Agent 3</strong>：審查資料庫遷移和模型</li>
        <li><strong>Agent 4</strong>：運行所有測試並檢查覆蓋率</li>
      </ul>
      <p>
        四個代理同時工作，每個都有自己的上下文，最後將結果匯報給領導代理做總結。
        原本需要 30 分鐘的審查，可以在 10 分鐘內完成。
      </p>

      <h2>子代理 vs Agent Teams：如何選擇？</h2>
      <ul>
        <li>
          <strong>使用子代理</strong>：當任務相對獨立，不需要代理之間協調時。
          例如「同時搜索三個不同的模組找某個 bug」
        </li>
        <li>
          <strong>使用 Agent Teams</strong>：當任務需要協作和溝通時。
          例如「重構整個微服務架構，需要同時修改多個服務」
        </li>
      </ul>

      <h2>注意事項</h2>
      <ul>
        <li>多代理會顯著增加 token 消耗——每個代理都有自己的上下文</li>
        <li>Agent Teams 需要確保 git 倉庫的狀態乾淨</li>
        <li>對於簡單任務，單一會話通常更高效</li>
      </ul>
    `
  },
  {
    slug: '31-git-worktrees',
    title: 'Git Worktrees 平行開發',
    navTitle: '31 Git Worktrees',
    type: '講義',
    content: `
      <p>
        Git Worktrees 是一個強大但經常被忽略的 Git 功能。在 Claude Code 的世界裡，
        它是實現平行開發的基礎設施。理解 worktrees 對於有效使用 Agent Teams 至關重要。
      </p>

      <h2>什麼是 Git Worktrees？</h2>
      <p>
        通常一個 Git 倉庫只有一個工作目錄。Git Worktrees 讓你可以從同一個倉庫建立多個工作目錄，
        每個目錄可以簽出不同的分支。這意味著你可以同時在多個分支上工作，而不需要 stash 或 commit
        當前的變更。
      </p>
      <pre><code># 建立一個新的 worktree
git worktree add ../my-project-feature-b feature-b

# 列出所有 worktrees
git worktree list

# 移除一個 worktree
git worktree remove ../my-project-feature-b</code></pre>

      <h2>為什麼 Worktrees 對 Claude Code 很重要？</h2>
      <p>
        當你使用子代理或 Agent Teams 時，多個 Claude 實例需要同時修改檔案。
        如果它們都在同一個目錄中工作，就會產生衝突。Worktrees 提供了完美的隔離：
        每個代理在自己的 worktree 中工作，互不干擾。
      </p>

      <h2>Claude Code 的 Worktree 整合</h2>
      <p>
        Claude Code 內建了 worktree 支援。當你使用 Agent Teams 或啟動子代理時，
        可以指定 <code>isolation: "worktree"</code> 參數，Claude 會自動：
      </p>
      <ol>
        <li>建立一個新的 worktree</li>
        <li>在該 worktree 中執行任務</li>
        <li>完成後建立 PR 或合併變更</li>
        <li>如果代理沒有做任何變更，自動清理 worktree</li>
      </ol>

      <h2>實際工作流</h2>
      <p>
        想像你正在開發 Feature A，同時想讓 Claude 處理 Feature B：
      </p>
      <ol>
        <li>你在主工作目錄中繼續開發 Feature A</li>
        <li>啟動一個子代理，讓它在 worktree 中處理 Feature B</li>
        <li>子代理在獨立的分支和目錄中工作，不會影響你的 Feature A</li>
        <li>完成後，子代理建立 PR，你可以審查和合併</li>
      </ol>

      <h2>Worktree + 子代理的組合</h2>
      <p>
        這是目前社群最推薦的平行開發模式：
      </p>
      <pre><code>幫我同時處理以下任務，每個用獨立的 worktree：
1. 在 feature/user-auth 分支上實現登入 API
2. 在 feature/dashboard 分支上建立儀表板組件
3. 在 fix/memory-leak 分支上修復記憶體洩漏問題</code></pre>
      <p>
        三個任務會同時在三個獨立的 worktree 中執行，互不干擾。
        每個完成後都會建立各自的 PR。
      </p>

      <h2>自動清理</h2>
      <p>
        Claude Code 具備智慧清理功能。如果一個代理在 worktree 中工作後沒有產生任何有意義的變更
        （例如探索後發現不需要修改），系統會自動移除該 worktree，不留下多餘的目錄。
      </p>

      <h2>實際範例：10 檔案重構</h2>
      <p>
        假設你需要重構分散在 10 個檔案中的一套舊 API：
      </p>
      <ol>
        <li>主代理分析所有 10 個檔案，制定重構策略</li>
        <li>將工作分成 3 組，各建立一個 worktree</li>
        <li>三個子代理平行工作，各處理 3-4 個檔案</li>
        <li>主代理整合結果，解決可能的衝突</li>
        <li>執行完整測試套件驗證</li>
      </ol>
      <p>
        這種方式將原本可能需要一個小時的重構工作壓縮到 20 分鐘。
      </p>

      <h2>注意事項</h2>
      <ul>
        <li>Worktrees 共享同一個 <code>.git</code> 目錄，所以 git hooks 和設定是共享的</li>
        <li>確保不要在多個 worktree 中簽出同一個分支</li>
        <li>定期清理不再需要的 worktrees：<code>git worktree prune</code></li>
      </ul>
    `
  },
  {
    slug: '32-cost-optimization',
    title: '成本優化策略',
    navTitle: '32 成本優化',
    type: '講義',
    content: `
      <p>
        Claude Code 的使用成本是許多開發者關心的話題。無論你使用的是 Max 訂閱方案還是 API，
        理解成本結構和優化策略都能幫助你更有效率地使用預算。
      </p>

      <h2>定價模型概覽</h2>
      <p>Claude Code 有幾種主要的付費方式：</p>
      <ul>
        <li>
          <strong>Max 方案</strong>：月費訂閱，包含一定的使用量。
          分為 5x（基礎倍率）和 20x（高倍率）兩個等級
        </li>
        <li>
          <strong>API 直接付費</strong>：按 token 計費，適合高用量或企業使用者。
          Opus 最貴，Haiku 最便宜
        </li>
      </ul>

      <h2>「opusplan」策略</h2>
      <p>
        社群中非常流行的一個成本優化策略叫做「opusplan」：
      </p>
      <ul>
        <li><strong>規劃階段使用 Opus</strong>：Opus 擁有最強的推理能力，適合分析複雜問題、
          制定架構方案、理解大型代碼庫</li>
        <li><strong>實施階段使用 Sonnet</strong>：Sonnet 更快且更便宜，
          對於按照已制定方案執行的實施工作綽綽有餘</li>
      </ul>
      <p>
        這種策略讓你在關鍵決策點使用最強的模型，在執行階段節省成本。
      </p>

      <h2>Rate Limit 管理</h2>
      <p>
        Max 方案有使用量限制。當你接近限制時，回應速度會降低或暫時無法使用。
        管理技巧：
      </p>
      <ul>
        <li>監控你的使用量百分比</li>
        <li>在高負荷工作前確認剩餘配額</li>
        <li>避免在不需要的時候載入大量檔案</li>
        <li>善用 <code>/compact</code> 減少每輪對話的 token 消耗</li>
      </ul>

      <h2>Token 預算管理</h2>
      <p>
        透過上下文百分比來監控你的 token 使用狀況。一些實用的節省技巧：
      </p>
      <ul>
        <li>使用搜索代替讀取整個檔案</li>
        <li>在 CLAUDE.md 中精簡不必要的內容</li>
        <li>及時使用 <code>/compact</code> 而不是等到自動壓縮</li>
        <li>避免讓 Claude 重複讀取已經處理過的檔案</li>
      </ul>

      <h2>會話管理</h2>
      <p>
        短而專注的會話比長會話更節省 token：
      </p>
      <ul>
        <li>每個會話專注一個任務</li>
        <li>30-45 分鐘完成一個會話</li>
        <li>完成後開新會話而不是在舊會話中繼續</li>
        <li>利用 Session Memory 保持跨會話的連續性</li>
      </ul>

      <h2>模型選擇指南</h2>
      <p>
        不同的任務適合不同的模型：
      </p>
      <ul>
        <li><strong>Haiku</strong>：簡單的格式轉換、文件重命名、基本的代碼生成。最便宜最快</li>
        <li><strong>Sonnet</strong>：日常開發、bug 修復、功能實現、測試撰寫。性價比最佳</li>
        <li><strong>Opus</strong>：複雜架構設計、大型重構、難以解決的 bug、系統設計。最強但最貴</li>
      </ul>

      <h2>社群經驗：90 分鐘 Max 5x 耗盡問題</h2>
      <p>
        許多 Max 5x 用戶反映，在密集使用 90 分鐘左右就會觸及 rate limit。社群建議：
      </p>
      <ul>
        <li>將工作分成多個較短的會話</li>
        <li>在等待 rate limit 恢復時，切換到規劃或文檔撰寫等不需要 Claude 的工作</li>
        <li>考慮升級到 20x 或切換到 API 付費，如果你是高用量使用者</li>
        <li>善用 Plan Mode（唯讀模式）減少不必要的執行操作</li>
      </ul>

      <h2>/compact 節省成本</h2>
      <p>
        <code>/compact</code> 不僅能管理上下文，還能直接節省成本。
        因為每輪對話都會發送完整的上下文給 API，更小的上下文意味著更少的 token 消耗。
        養成在上下文達到 50% 時就使用 <code>/compact</code> 的習慣。
      </p>
    `
  },
  {
    slug: '33-code-review-and-ci-automation',
    title: '代碼審查與 CI 自動化',
    navTitle: '33 CI 自動化',
    type: '講義',
    content: `
      <p>
        Claude Code 不僅可以用於本地開發，還可以整合到 CI/CD 流程中，
        實現自動化的代碼審查、PR 分析和安全檢查。這是提升團隊開發效率的強大工具。
      </p>

      <h2>claude-code-action</h2>
      <p>
        <code>claude-code-action</code> 是 GitHub Marketplace 上的官方 GitHub Action。
        它讓 Claude Code 能夠自動回應 PR、Issue 和 Review Comment。
      </p>
      <p>安裝後，Claude 可以：</p>
      <ul>
        <li>自動審查每個 PR 的代碼變更</li>
        <li>回應 PR 中的評論和問題</li>
        <li>基於 Issue 描述直接建立修復 PR</li>
      </ul>

      <h2>GitHub Actions 配置</h2>
      <p>
        在你的倉庫中建立 <code>.github/workflows/claude-review.yml</code>：
      </p>
      <pre><code>name: Claude Code Review
on:
  pull_request:
    types: [opened, synchronize]
  issue_comment:
    types: [created]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          model: claude-sonnet-4-20250514
          direct_prompt: |
            Review this PR for:
            1. Code quality and best practices
            2. Potential bugs or edge cases
            3. Security concerns
            4. Test coverage</code></pre>

      <h2>多代理 PR 分析</h2>
      <p>
        對於大型 PR，你可以配置多個代理同時分析不同的面向：
      </p>
      <ul>
        <li><strong>Agent 1</strong>：代碼品質和可讀性</li>
        <li><strong>Agent 2</strong>：安全漏洞掃描</li>
        <li><strong>Agent 3</strong>：效能分析</li>
        <li><strong>Agent 4</strong>：測試覆蓋率檢查</li>
      </ul>
      <p>
        四個代理平行執行，每個專注於一個面向，最後在 PR 中留下各自的評論。
      </p>

      <h2>安全審查 Action</h2>
      <p>
        <code>claude-code-security-review</code> 是專門用於安全審查的 Action。
        它會深入分析代碼中的安全隱患，包括：
      </p>
      <ul>
        <li>SQL 注入風險</li>
        <li>XSS 漏洞</li>
        <li>敏感資料洩露</li>
        <li>不安全的依賴使用</li>
      </ul>

      <h2>/review 手動審查</h2>
      <p>
        在本地終端中，你可以使用內建的 <code>/review</code> 命令進行手動代碼審查：
      </p>
      <pre><code>/review</code></pre>
      <p>
        Claude 會分析當前的 git diff，指出潛在問題，並提出改善建議。
        這在提交 PR 之前做自我審查非常有用。
      </p>

      <h2>自動化 PR 描述與變更日誌</h2>
      <p>
        除了代碼審查，Claude 還可以自動生成：
      </p>
      <ul>
        <li><strong>PR 描述</strong>：根據代碼變更自動撰寫清晰的 PR 描述</li>
        <li><strong>變更日誌</strong>：自動生成 CHANGELOG 條目</li>
        <li><strong>Release Notes</strong>：從多個 PR 生成版本發佈說明</li>
      </ul>

      <h2>成本與效益</h2>
      <p>
        使用 API 進行自動化審查的平均成本約為每次 $15-25（取決於 PR 大小和使用的模型）。
        這個成本需要與以下效益對比：
      </p>
      <ul>
        <li>減少人工審查時間 50-70%</li>
        <li>更早發現安全漏洞和 Bug</li>
        <li>統一的審查標準和品質</li>
        <li>24/7 全天候自動審查</li>
      </ul>

      <h2>最佳實踐</h2>
      <ul>
        <li>將 Claude 審查作為補充而非替代人工審查</li>
        <li>在 CLAUDE.md 中定義專案特定的審查標準</li>
        <li>對小型 PR 使用 Sonnet 以節省成本</li>
        <li>定期審查和更新 Action 的配置</li>
      </ul>
    `
  },
  {
    slug: '34-permissions-and-enterprise',
    title: '權限與企業部署',
    navTitle: '34 權限與企業',
    type: '講義',
    content: `
      <p>
        對於企業環境，Claude Code 提供了完整的權限控制、配置管理和審計功能。
        了解這些機制對於在團隊和組織中安全地部署 Claude Code 至關重要。
      </p>

      <h2>權限模型</h2>
      <p>
        Claude Code 使用三層式權限評估，按優先級從高到低：
      </p>
      <ol>
        <li><strong>deny（拒絕）</strong>：明確禁止的操作，最高優先級，無法被覆蓋</li>
        <li><strong>allow（允許）</strong>：明確允許的操作，不需要詢問使用者</li>
        <li><strong>ask（詢問）</strong>：需要使用者確認的操作，預設行為</li>
      </ol>
      <p>
        這個評估順序意味著：如果一個操作被 deny 了，即使其他規則 allow 它，仍然會被拒絕。
      </p>

      <h2>settings.json 配置</h2>
      <p>
        使用者可以透過 <code>~/.claude/settings.json</code> 或專案級的 <code>.claude/settings.json</code>
        來配置權限：
      </p>
      <pre><code>{
  "permissions": {
    "allow": [
      "Bash(npm run test)",
      "Bash(npm run build)",
      "Read",
      "Write"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(git push --force)"
    ]
  },
  "model": "claude-sonnet-4-20250514",
  "mcpServers": {}
}</code></pre>
      <p>
        你可以精確控制哪些命令允許自動執行，哪些需要確認，哪些完全禁止。
      </p>

      <h2>Managed Settings（企業託管設定）</h2>
      <p>
        對於企業 IT 部門，<code>managed-settings.json</code> 提供了不可覆蓋的組織級設定。
        這個檔案由 IT 管理員部署，開發者無法修改。
      </p>
      <ul>
        <li>強制使用特定的模型或 API 端點</li>
        <li>禁止某些危險操作</li>
        <li>強制啟用特定的 MCP 伺服器</li>
        <li>限制可用的功能</li>
      </ul>

      <h2>MDM/OS 級別部署</h2>
      <p>
        Managed Settings 可以透過以下方式部署：
      </p>
      <ul>
        <li><strong>macOS</strong>：透過 MDM 配置檔案或企業設定管理工具</li>
        <li><strong>Linux</strong>：透過系統級配置或套件管理</li>
        <li><strong>Windows</strong>：透過群組原則（Group Policy）或 Intune</li>
      </ul>

      <h2>CLAUDE.md 注入</h2>
      <p>
        企業可以在全組織範圍內注入 CLAUDE.md 規則。這讓 IT 部門可以確保所有開發者
        的 Claude Code 都遵循組織的標準：
      </p>
      <ul>
        <li>統一的程式碼風格規範</li>
        <li>安全最佳實踐</li>
        <li>合規性要求</li>
        <li>禁止使用的函式庫或模式</li>
      </ul>

      <h2>團隊約定</h2>
      <p>
        即使不是企業環境，團隊也能利用以下機制統一工作方式：
      </p>
      <ul>
        <li><strong>共享 CLAUDE.md</strong>：提交到版本控制中，團隊成員共享相同的規則</li>
        <li><strong>共享 Skills</strong>：在 <code>.claude/skills/</code> 中定義團隊的工作流</li>
        <li><strong>共享 Custom Commands</strong>：在 <code>.claude/commands/</code> 中定義常用操作</li>
      </ul>

      <h2>Hooks 審計日誌</h2>
      <p>
        Claude Code 的 Hooks 機制讓你可以在特定事件發生時執行自訂腳本。
        這可以用來記錄審計日誌：
      </p>
      <ul>
        <li>記錄每次 Claude 執行的命令</li>
        <li>記錄檔案修改歷史</li>
        <li>發送操作通知到日誌系統</li>
        <li>在特定操作前進行額外的安全檢查</li>
      </ul>

      <h2>企業 SSO 與存取控制</h2>
      <p>
        Claude Code 支援企業級的身份認證和存取控制：
      </p>
      <ul>
        <li>SSO（Single Sign-On）整合</li>
        <li>基於角色的存取控制</li>
        <li>API Key 管理和輪換</li>
        <li>使用量追蹤和預算控制</li>
      </ul>
      <p>
        這些功能讓企業可以在保持安全性和合規性的前提下，大規模部署 Claude Code。
      </p>
    `
  },
  {
    slug: '35-advanced-summary-and-resources',
    title: '進階總結與資源',
    navTitle: '35 總結與資源',
    type: '講義',
    content: `
      <p>
        恭喜你完成了 Claude Code 進階篇！在這個部分中，我們深入探討了許多進階主題。
        讓我們回顧重點，並為你提供持續學習的資源。
      </p>

      <h2>Part 3 重點回顧</h2>
      <ul>
        <li><strong>CLAUDE.md</strong>：你的 AI 開發手冊，善用層級結構和 Mistakes to Avoid 模式</li>
        <li><strong>Skills 系統</strong>：可重用的 AI 能力，跨平台相容</li>
        <li><strong>Session Memory</strong>：讓 Claude 在會話之間記住你的偏好和專案知識</li>
        <li><strong>Plan Mode 與延伸思考</strong>：動手前先想清楚，用 ultrathink 處理最複雜的問題</li>
        <li><strong>上下文管理</strong>：Context Zones 框架，善用 /compact 保持上下文新鮮</li>
        <li><strong>IDE 整合</strong>：VS Code 和 JetBrains 的圖形化體驗</li>
        <li><strong>Web 與遠端</strong>：隨時隨地使用 Claude Code</li>
        <li><strong>TDD 工作流</strong>：測試優先，品質提升 2-3 倍</li>
        <li><strong>Agent Teams</strong>：多代理協作處理大型任務</li>
        <li><strong>Git Worktrees</strong>：平行開發的基礎設施</li>
        <li><strong>成本優化</strong>：opusplan 策略，聰明地使用預算</li>
        <li><strong>CI 自動化</strong>：自動化代碼審查和安全檢查</li>
        <li><strong>企業部署</strong>：權限控制、託管設定和審計功能</li>
      </ul>

      <h2>官方資源</h2>
      <ul>
        <li>
          <strong>官方文檔</strong>：
          <a href="https://code.claude.com/docs">code.claude.com/docs</a>
          — 最權威的功能說明和使用指南
        </li>
        <li>
          <strong>GitHub Changelog</strong>：追蹤 Claude Code 的最新更新和功能變更
        </li>
        <li>
          <strong>Anthropic Blog</strong>：
          <a href="https://www.anthropic.com/blog">anthropic.com/blog</a>
          — 官方部落格，發佈重大功能公告
        </li>
      </ul>

      <h2>社群資源</h2>
      <ul>
        <li>
          <strong>shanraisshan/claude-code-best-practice</strong>：
          GitHub 上擁有 24.2k 星標的社群最佳實踐合集，涵蓋 CLAUDE.md 範本、
          工作流技巧和成本優化策略
        </li>
        <li>
          <strong>ykdojo/claude-code-tips</strong>：
          精選的 Claude Code 使用技巧和訣竅
        </li>
        <li>
          <strong>各種社群論壇和 Discord</strong>：
          與其他 Claude Code 使用者交流經驗
        </li>
      </ul>

      <h2>Anthropic 重要公告</h2>
      <p>
        建議關注以下來源以獲取最新消息：
      </p>
      <ul>
        <li>Anthropic 官方 Twitter/X 帳號</li>
        <li>Claude Code 的 GitHub Release Notes</li>
        <li>Anthropic 官方部落格的技術文章</li>
      </ul>

      <h2>展望未來</h2>
      <p>
        Claude Code 的生態系統正在快速發展。值得關注的方向包括：
      </p>
      <ul>
        <li><strong>Computer Use</strong>：讓 Claude 直接操作你的電腦桌面，進行更複雜的自動化</li>
        <li><strong>進階代理能力</strong>：更智慧的多代理協作和自主任務規劃</li>
        <li><strong>更多 MCP 伺服器</strong>：生態系統持續擴展，支援更多工具和服務</li>
        <li><strong>企業功能增強</strong>：更完善的團隊協作和管理功能</li>
      </ul>

      <h2>保持更新的技巧</h2>
      <ul>
        <li>定期更新 Claude Code 到最新版本：<code>claude update</code></li>
        <li>每週瀏覽一次 GitHub Changelog</li>
        <li>參與社群討論，學習其他人的工作流</li>
        <li>嘗試新功能——很多最佳實踐都是使用者自己發現的</li>
      </ul>

      <h2>貢獻到 Claude Code 生態系統</h2>
      <p>
        你也可以回饋社群：
      </p>
      <ul>
        <li>分享你的 CLAUDE.md 範本和 Skills</li>
        <li>建立並發佈 MCP 伺服器</li>
        <li>撰寫使用心得和教學文章</li>
        <li>在 GitHub 上回報 Bug 和提出功能建議</li>
        <li>幫助翻譯文檔到更多語言</li>
      </ul>
      <p>
        感謝你完成本課程。希望這些知識能幫助你更有效地使用 Claude Code，
        提升你的開發效率和代碼品質。祝你編程愉快！
      </p>
    `
  }
];
