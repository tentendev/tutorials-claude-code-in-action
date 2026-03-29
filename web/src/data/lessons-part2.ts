
import { Lesson } from './lessons-part1';

export const lessonsPart2: Lesson[] = [
  {
    slug: '11-mcp-servers-with-claude-code',
    title: 'Claude Code 的 MCP 伺服器',
    navTitle: '11 MCP 伺服器',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303240',
    content: `
      <p>
        MCP (Model Context Protocol) 是一個開放標準，允許開發者構建“伺服器”，為 AI 模型提供訪問數據和工具的能力。
        Claude Code 內置了 MCP 客戶端，可以輕鬆連接這些工具。
      </p>

      <h2>什麼是 MCP？</h2>
      <p>
        想像 MCP 就像 AI 的 USB 接口。你可以透過 MCP 接入各種外部系統：
      </p>
      <ul>
        <li><strong>資料庫</strong>：PostgreSQL, MySQL, SQLite</li>
        <li><strong>開發工具</strong>：GitHub, GitLab, Jira</li>
        <li><strong>雲服務</strong>：AWS, Google Cloud, Azure</li>
        <li><strong>本地應用</strong>：Google Drive, Slack</li>
      </ul>

      <h2>在 Claude Code 中使用 MCP</h2>
      <p>
        Claude Code 可以連接任意 MCP 伺服器。配置非常簡單：
      </p>
      <ol>
        <li>打開配置檔案：<code>~/.claude/config.json</code>（或者專案級的配置）</li>
        <li>在 <code>mcpServers</code> 字段中添加伺服器定義</li>
      </ol>
      <pre><code>{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "./my.db"]
    }
  }
}</code></pre>
      <p>
        一旦配置完成並重啟 Claude Code，它就會自動識別該伺服器提供的工具。
      </p>
      <p>
        例如連接了 SQLite MCP 後，Claude 就可以執行 SQL 查詢：
        “查一下 users 表裡有多少活躍用戶”。它會自動調用 \`query_sql\` 工具並給出結果。
      </p>

      <h2>為什麼這很重要？</h2>
      <p>
        透過 MCP，Claude 不再局限於讀取本地檔案。它變成了連接你整個技術棧的樞紐。
        你可以讓它“讀取代碼庫，找出與那個 Jira ticket 相關的 bug，並查詢生產資料庫驗證數據”，
        所有操作都在一個對話中完成。
      </p>

      <h2>快速添加 MCP 伺服器</h2>
      <p>除了手動編輯配置檔案，你現在可以使用 CLI 命令快速添加：</p>
      <pre><code>claude mcp add sqlite -- uvx mcp-server-sqlite --db-path ./my.db</code></pre>
      <p>這會自動將伺服器配置寫入你的設定檔。</p>

      <h2>進階 MCP 功能</h2>
      <ul>
        <li><strong>工具發現</strong>：使用 <code>/tools</code> 命令查看所有已連接的 MCP 工具</li>
        <li><strong>延遲載入</strong>：Claude Code 會智慧識別並只啟用相關的 MCP 工具，減少啟動開銷</li>
        <li><strong>Inline MCP</strong>：子代理可以定義自己的 MCP 伺服器，與父代理隔離</li>
        <li><strong>Streamable HTTP</strong>：支持新的 HTTP 傳輸協議，適合遠端 MCP 伺服器</li>
      </ul>
    `
  },
  {
    slug: '12-github-integration',
    title: 'GitHub 整合',
    navTitle: '12 GitHub 整合',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303236',
    content: `
      <p>
        Claude Code 針對 GitHub 提供了深度整合，讓代碼審查和 PR 管理變得異常輕鬆。
      </p>

      <h2>核心功能</h2>
      <ul>
        <li><strong>讀取 PR</strong>：理解 PR 的變更內容、描述及上下文</li>
        <li><strong>評論 PR</strong>：直接對代碼行進行評論</li>
        <li><strong>創建 PR</strong>：幫你撰寫 PR 描述並提交</li>
      </ul>

      <h2>配置 GitHub</h2>
      <p>你需要安裝 GitHub MCP 伺服器來啟用這些功能。</p>
      <pre><code>{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "你的_TOKEN"
      }
    }
  }
}</code></pre>

      <h2>實戰場景</h2>
      <h3>1. 智慧 Code Review</h3>
      <p>
        你可以讓 Claude 幫你 Review 一個 PR：
        <code>/review https://github.com/org/repo/pull/123</code>
      </p>
      <p>
        它會分析變更，指出潛在 bug、風格問題或安全隱患。
      </p>

      <h3>2. 自動修復 Issue</h3>
      <p>
        結合 GitHub Issue，你可以說：
        “看下 Issue #45，重現這個 bug 並修復它。”
      </p>
      <p>
        Claude 會讀取 Issue 描述，定位代碼，嘗試修復，甚至為你推送一個包含修復的新分支。
      </p>

      <h2>GitHub Actions 自動化</h2>
      <p>
        Anthropic 提供了官方的 GitHub Action —— <code>claude-code-action</code>，可以在 GitHub Marketplace 找到。
        它能自動對每個 PR 進行 AI 代碼審查。
      </p>

      <h3>設置步驟</h3>
      <ol>
        <li>在 Claude Code 中執行 <code>/install-github-app</code> 安裝 GitHub App</li>
        <li>在倉庫的 <code>.github/workflows/</code> 目錄中配置 Action</li>
        <li>每次 PR 提交時，Claude 會自動分析變更並留下審查評論</li>
      </ol>

      <h3>安全審查</h3>
      <p>
        除了代碼審查，還有專門的 <code>claude-code-security-review</code> Action，
        用於自動掃描 PR 中的安全漏洞。
      </p>

      <h2>/pr 命令</h2>
      <p>
        Claude Code 內置了 <code>/pr</code> 命令（通過 Skills 系統），可以一鍵創建 PR：
        自動生成標題、描述，並推送到遠端分支。
      </p>
    `
  },
  {
    slug: '13-introducing-hooks',
    title: '認識 Hooks',
    navTitle: '13 認識 Hooks',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/308386',
    content: `
      <p>
        Hooks 是 Claude Code 的高級擴展機制。它允許你在 Claude 生命週期的特定時間點執行自定義腳本。
      </p>
      <p>如果你熟悉 Git Hooks，那麼 Claude Hooks 的概念是一樣的。</p>

      <h2>Hooks 執行時機</h2>
      <p>Claude 支持在以下時機觸發 Hooks：</p>
      <ul>
        <li><strong>PreToolUse</strong>：在 Claude 使用任何工具之前</li>
        <li><strong>PostToolUse</strong>：在 Claude 使用工具並獲得結果之後</li>
        <li><strong>Stop</strong>：在對話結束時</li>
        <li><strong>Start</strong>：在對話開始時（會話啟動）</li>
      </ul>

      <h2>為什麼需要 Hooks？</h2>
      <p>Hooks 讓你可以強制執行規則或自動化副作用。例如：</p>
      <ul>
        <li><strong>安全檢查</strong>：在 Claude 執行命令前，檢查是否包含危險操作（如 <code>rm -rf /</code>）</li>
        <li><strong>自動 Lint</strong>：在 Claude 編輯檔案後，自動執行 Prettier 格式化</li>
        <li><strong>日誌記錄</strong>：記錄 Claude 的所有操作到審計日誌</li>
        <li><strong>成本控制</strong>：監控 Token 使用量，超過閾值發出警告</li>
      </ul>
    `
  },
  {
    slug: '14-defining-hooks',
    title: '定義 Hooks',
    navTitle: '14 定義 Hooks',
    type: '講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/308387',
    content: `
      <p>要定義 Hooks，你需要編輯配置檔案（通常是 <code>.claude/config.json</code> 中的 <code>hooks</code> 字段）。</p>

      <h2>配置結構</h2>
      <pre><code>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm run lint"
          }
        ]
      }
    ]
  }
}</code></pre>

      <p>這個配置的意思是：</p>
      <ul>
        <li><strong>事件</strong>：<code>PostToolUse</code>（工具使用後）</li>
        <li><strong>匹配器</strong>：<code>Edit</code>（僅當使用的工具是 'Edit' 時觸發）</li>
        <li><strong>動作</strong>：執行命令 <code>npm run lint</code></li>
      </ul>

      <h2>匹配器 (Matcher)</h2>
      <p>你可以指定 Hook 針對哪些工具觸發：</p>
      <ul>
        <li><code>"*"</code>：匹配所有工具</li>
        <li><code>"Edit"</code>：僅匹配檔案編輯</li>
        <li><code>"Bash"</code>：僅匹配終端命令</li>
        <li><code>["Edit", "Bash"]</code>：匹配多個工具</li>
      </ul>
    `
  },
  {
    slug: '15-implementing-a-hook',
    title: '實現一個 Hook',
    navTitle: '15 實現一個 Hook',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/308388',
    content: `
      <p>讓我們動手實現一個實用的 Hook：<strong>自動運行測試</strong>。</p>
      <p>目標：每當 Claude 修改了代碼（使用了 <code>Edit</code> 工具），我們就自動運行測試，確保它沒改壞東西。</p>

      <h2>步驟</h2>
      <ol>
        <li>打開專案的 <code>.claude/config.json</code></li>
        <li>添加以下配置：</li>
      </ol>
      <pre><code>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm test"
          }
        ]
      }
    ]
  }
}</code></pre>
      
      <h2>測試 Hook</h2>
      <p>
        嘗試讓 Claude 修改一個檔案。你會發現修改完成後，終端機裡會自動彈出測試運行的結果。
        如果測試失敗，Claude 會看到失敗的輸出，並通常會主動嘗試修復。
      </p>
      
      <p>
        <strong style="color: #D97757;">注意：</strong> 自動運行測試可能會比較慢。在大型專案中，你可能希望只運行相關測試，
        或者將 Hook 設置為手動確認模式（儘管 Hooks 當前主要設計為自動執行）。
      </p>
    `
  },
  {
    slug: '16-gotchas-around-hooks',
    title: 'Hooks 常見坑點',
    navTitle: '16 Hooks 常見坑點',
    type: '講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/308389',
    content: `
      <p>Hooks 非常強大，但也容易出錯。以下是一些常見的“坑”：</p>

      <h2>1. 無限循環</h2>
      <p>
        如果你在 <code>PostToolUse</code> 裡執行了一個命令，而這個命令又觸發了 Claude 的某種反應（雖然 Hook 執行的命令
        通常不視為 AI 操作，但如果 Hook 腳本調用了 Claude API 則另當別論），要小心循環調用。
        更常見的是邏輯死循環：Lint Hook 修改了代碼 -> 觸發 Edit -> 再次觸發 Lint Hook。
        <strong>解決方案</strong>：確保 Hook 中的命令（如 Lint）不會再次觸發監視機制，或使用無副作用的命令。
      </p>

      <h2>2. 超時與性能</h2>
      <p>
        Hooks 是同步執行的。Claude 會等待 Hook 結束才繼續下一步。如果你掛了一個跑 5 分鐘的測試套件，
        你的交互體驗會變得非常卡頓。
        <strong>解決方案</strong>：只運行快速的單元測試，與完整的集成測試分離。
      </p>

      <h2>3. 輸出干擾</h2>
      <p>
        Hook 的標準輸出（stdout）和標準錯誤（stderr）會被注入到 Claude 的上下文中。
        如果輸出太多垃圾資訊，會佔用 Token 上限並干擾 Claude 的判斷。
        <strong>解決方案</strong>：讓 Hook 腳本保持安靜 (silent)，只在出錯時輸出關鍵資訊。
      </p>

      <h2>4. 輸入結構變化</h2>
      <p>
        Hook 接收的輸入數據結構（JSON）可能會隨 Claude Code 版本更新而變化。
      </p>
      <pre><code>{
  "tool_use_id": "toolu_01...",
  "tool_name": "Edit",
  "tool_input": { ... },
  "tool_result": { ... }
}</code></pre>
      <p>編寫解析腳本時要做好容錯處理。</p>
    `
  },
  {
    slug: '17-useful-hooks',
    title: '實用的 Hooks',
    navTitle: '17 實用的 Hooks',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/308390',
    content: `
      <p>這裡分享幾個生產環境中好用的 Hook 模式。</p>

      <h2>1. 語法檢查 (Linter)</h2>
      <p>在每次編輯後自動修復格式問題：</p>
      <pre><code>"command": "npx prettier --write ."</code></pre>
      <p>這保證了 Claude 寫的代碼始終符合團隊規範。</p>

      <h2>2. 防止敏感操作</h2>
      <p>在 <code>PreToolUse</code> 中檢查 <code>Bash</code> 命令：</p>
      <p>編寫一個腳本 <code>check_safety.py</code>，如果是危險命令（如涉及刪庫、推送 master 分支）則返回非零狀態碼。</p>
      <p>如果 Hook 失敗，Claude 的工具執行會被攔截。</p>

      <h2>3. 通知發送</h2>
      <p>耗時任務結束後發送通知：</p>
      <p>如果你讓 Claude 跑一個長任務，可以掛一個 Hook 在結束時發送系統通知（macOS notify-send），提醒你回來看結果。</p>
    `
  },
  {
    slug: '18-another-useful-hook',
    title: '另一個實用 Hook',
    navTitle: '18 另一個實用 Hook',
    type: '講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/313459',
    content: `
      <p>還有一個非常有用的 Hook：<strong>記錄工具輸入日誌 (Logger)</strong>。</p>

      <p>
        當你開發複雜的 Agent 或自定義工具時，你經常想知道 Claude 到底傳了什麼參數進去。
        雖然終端會顯示，但有時候你需要結構化的日誌。
      </p>

      <h2>日誌 Hook 實現</h2>
      <p>
        我們可以利用 <code>jq</code> 工具把 Hook 的輸入轉存到檔案中。
        Claude Code 傳遞給 Hook 的數據是在環境變數或標準輸入中（取決於具體實現細節，通常作為 stdin 傳給 command）。
      </p>

      <p><strong>注意：</strong> Claude Code 目前向 Hook 傳遞數據的方式通常是將 JSON 寫入 stdin。</p>

      <pre><code>{
  "type": "tool_use",
  "name": "Edit",
  "input": { ... },
  "hook_event_name": "Stop",
  "stop_hook_active": false
}</code></pre>

      <p>
        可以看到，不同 Hook 的輸入差異非常大，這使得編寫 Hook 變得困難——你不一定知道該解析哪些字段。
      </p>

      <p>建議做一個輔助 Hook 來記錄輸入：</p>
      <pre><code>"PostToolUse": [ // Or "PreToolUse" or "Stop", etc
  {
    "matcher": "*",
    "hooks": [
      {
        "type": "command",
        "command": "jq . > post-log.json"
      }
    ]
  },
]</code></pre>
      <p>
        該命令會把 Hook 輸入寫入 <code>post-log.json</code>，方便你觀察真實結構，從而更容易編寫穩定的 Hook。
      </p>
    `
  },
  {
    slug: '19-the-claude-code-sdk',
    title: 'Claude Code SDK',
    navTitle: '19 Claude Code SDK',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/312001',
    content: `
      <p>
        Claude Code SDK 讓你可以透過程式方式調用 Claude Code。它提供 TypeScript、Python 以及 CLI
        方式，功能與終端中的 Claude Code 一致。
      </p>

      <img
        src="/images/course/19-claude-code-sdk.png"
        alt="Claude Code SDK"
      />

      <p>
        SDK 執行就是你熟悉的 Claude Code，同樣具備完整工具集，適用於自動化與系統集成。
      </p>

      <h2>關鍵特性</h2>
      <ul>
        <li>支持編程方式調用 Claude Code</li>
        <li>功能與終端版本一致</li>
        <li>繼承同目錄下 Claude Code 的設置</li>
        <li>默認唯讀權限</li>
        <li>適合嵌入更大的自動化流程</li>
      </ul>

      <h2>基礎用法</h2>
      <p>以下是一個 TypeScript 示例，用於查找重複查詢：</p>
      <pre><code>import { query } from "@anthropic-ai/claude-code";

const prompt = "Look for duplicate queries in the ./src/queries dir";

for await (const message of query({
  prompt,
})) {
  console.log(JSON.stringify(message, null, 2));
}</code></pre>
      <p>
        執行後你會看到 Claude Code 與模型之間的完整消息流，最終消息即 Claude 的完整響應。
      </p>

      <h2>權限與工具</h2>
      <p>
        SDK 默認是唯讀模式，只能讀取與檢索檔案，無法寫入或編輯。如果需要寫權限，可以在調用時傳入
        <code>allowedTools</code>：
      </p>
      <pre><code>for await (const message of query({
  prompt,
  options: {
    allowedTools: ["Edit"]
  }
})) {
  console.log(JSON.stringify(message, null, 2));
}</code></pre>
      <p>也可以在專案的 <code>.claude</code> 設置檔案中進行全局授權。</p>

      <h2>實用場景</h2>
      <ul>
        <li>在 Git hooks 中自動評審改動</li>
        <li>在構建腳本中分析和優化代碼</li>
        <li>輔助維護任務的工具命令</li>
        <li>自動生成文檔</li>
        <li>CI/CD 中的代碼品質檢查</li>
      </ul>
      <p>
        SDK 讓把 AI 能力融入任意開發環節，是自動化與集成場景的強大基礎設施。
      </p>

      <h2>Agent SDK（更新）</h2>
      <p>
        Claude Code SDK 現已更名為 <strong>Agent SDK</strong>，反映了其更廣泛的代理編排能力。
        除了 TypeScript，現在也支持 Python：
      </p>
      <pre><code># Python 範例
from claude_agent_sdk import query

async for message in query(
    prompt="分析 src/ 目錄中的所有 API 端點",
    allowed_tools=["Read", "Glob", "Grep"]
):
    print(message)</code></pre>

      <h2>結構化輸出</h2>
      <p>Agent SDK 支持結構化輸出，確保回傳的 JSON 符合你定義的 Schema：</p>
      <pre><code>const result = await query({
  prompt: "列出所有 API 端點",
  outputSchema: {
    type: "object",
    properties: {
      endpoints: {
        type: "array",
        items: {
          type: "object",
          properties: {
            method: { type: "string" },
            path: { type: "string" },
            description: { type: "string" }
          }
        }
      }
    }
  }
});</code></pre>

      <h2>代理編排</h2>
      <p>
        Agent SDK 的核心能力是讓你構建多代理系統。你可以創建專門的子代理來處理不同任務，
        並透過 SDK 協調它們的工作。更多關於多代理的介紹請參考第 30 課。
      </p>
    `
  },
  {
    slug: '20-quiz-on-claude-code',
    title: 'Claude Code 測驗',
    navTitle: '20 Claude Code 測驗',
    type: '測驗',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/308391',
    content: `
      <p>此頁面為在線測驗，需要在原課程平台中完成。</p>
      <p>靜態版本無法展示交互測驗，請點擊原文連結參與測試。</p>
    `
  },
  {
    slug: '21-summary-and-next-steps',
    title: '總結與下一步',
    navTitle: '21 總結與下一步',
    type: '影片',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303238',
    content: `
      <p>本節為課程總結影片。</p>
      <p>當前頁面不包含文字講義，請在原課程頁面觀看影片內容。</p>
    `
  }
];
