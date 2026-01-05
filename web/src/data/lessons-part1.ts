
export interface Lesson {
  slug: string;
  title: string;
  navTitle: string;
  type: string;
  sourceUrl?: string;
  content: string;
}

export const lessonsPart1: Lesson[] = [
  {
    slug: '01-introduction',
    title: '引言',
    navTitle: '01 引言',
    type: '影片',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303233',
    content: `
      <p>本節為課程引言影片。</p>
      <p>當前頁面不包含文字講義，請在原課程頁面觀看影片內容。</p>
    `
  },
  {
    slug: '02-what-is-a-coding-assistant',
    title: '什麼是編碼助手？',
    navTitle: '02 什麼是編碼助手？',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303235',
    content: `
      <p>
        編碼助手不僅僅是寫程式碼的工具——它是一個使用語言模型來處理複雜編程任務的系統。了解它們在幕後
        如何運作，能幫助你理解什麼才是真正強大的編碼夥伴。
      </p>

      <h2>編碼助手如何工作</h2>
      <p>
        當你給編碼助手一個任務（例如根據報錯修復 Bug），它會按類似人類開發者的方式來推進：
      </p>
      <img
        src="/images/course/02-what-is-a-coding-assistant-01.png"
        alt="編碼助手的工作流程"
      />
      <ol>
        <li><strong>收集上下文</strong>：理解錯誤指向什麼、哪些檔案受影響、哪些檔案相關</li>
        <li><strong>制定計劃</strong>：決定如何解決問題，例如修改程式碼並執行測試驗證</li>
        <li><strong>採取行動</strong>：真正去修改檔案、執行命令並完成修復</li>
      </ol>
      <p>
        關鍵洞見在於：第一步和最後一步都需要與外部世界交互——讀檔案、查文檔、執行命令、編輯程式碼等。
      </p>

      <h2>工具使用的挑戰</h2>
      <p>
        語言模型本身只能處理文本、輸出文本，無法真正讀取檔案或執行命令。如果你直接讓一個獨立語言模型去
        讀檔案，它會告訴你自己沒有這個能力。
      </p>
      <p>那編碼助手如何解決？它們使用一種巧妙的系統，叫做“工具使用”。</p>

      <h2>工具使用如何運作</h2>
      <p>
        當你向編碼助手發送請求時，它會自動在消息中加上一些指令，教模型如何請求動作。比如它可能加上：
        “如果你想讀檔案，請回復 ‘ReadFile: 檔案名’”。
      </p>
      <p>完整流程如下：</p>
      <ol>
        <li>你提問：“main.go 檔案裡寫了什麼程式碼？”</li>
        <li>編碼助手為你的請求添加工具指令</li>
        <li>語言模型回應：“ReadFile: main.go”</li>
        <li>編碼助手讀取真實檔案內容並回傳給模型</li>
        <li>語言模型基於檔案內容給出最終答案</li>
      </ol>
      <p>
        這套機制讓語言模型“看起來”能夠讀檔案、寫程式碼、執行命令——實際上它只是生成了格式化的文本響應。
      </p>

      <h2>為什麼 Claude 的工具使用很關鍵</h2>
      <p>
        不是所有語言模型都擅長使用工具。Claude 系列模型（Opus、Sonnet、Haiku）在理解工具、調用工具方面
        尤其強。
      </p>
      <img
        src="/images/course/02-what-is-a-coding-assistant-02.png"
        alt="Claude 工具使用優勢"
      />
      <p>強工具使用帶來的好處包括：</p>

      <h2>強工具使用的收益</h2>
      <ul>
        <li><strong>更難的任務也能完成</strong>：Claude 能組合多種工具，甚至使用從未見過的新工具</li>
        <li><strong>平台可擴展</strong>：你可以輕鬆為 Claude Code 增加新工具，Claude 會自適應你的流程</li>
        <li><strong>更好的安全性</strong>：無需索引代碼庫即可導航，避免將整個代碼庫發送到外部伺服器</li>
      </ul>

      <h2>要點回顧</h2>
      <p>理解編碼助手的關鍵在於：</p>
      <ul>
        <li>編碼助手透過語言模型完成任務</li>
        <li>語言模型需要工具才能處理真實世界的編程問題</li>
        <li>不同模型的工具使用能力差異很大</li>
        <li>Claude 的工具使用能力提升了安全性、可定制性與長期可用性</li>
      </ul>
      <p>
        正是這種工具使用能力，將一個只會生成文本的模型，轉變成能讀檔案、理解代碼庫並實際修改專案的強大
        編碼助手。
      </p>
    `
  },
  {
    slug: '03-claude-code-in-action',
    title: 'Claude Code 實戰',
    navTitle: '03 Claude Code 實戰',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303242',
    content: `
      <p>
        Claude Code 內置了一整套開發工具，涵蓋讀取檔案、編寫程式碼、執行命令、管理目錄等常見任務。真正讓
        Claude Code 強大的是它能智慧地組合這些工具，處理複雜的多步驟問題。
      </p>
      <p>本節主要透過影片演示這些能力的實際使用方式。</p>
    `
  },
  {
    slug: '04-claude-code-setup',
    title: 'Claude Code 安裝與配置',
    navTitle: '04 安裝與配置',
    type: '講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/301614',
    content: `
      <p><strong>準備開始在本地安裝 Claude Code！</strong></p>
      <p>
        完整的安裝說明請參考：
        <a href="https://code.claude.com/docs/en/quickstart"
          >https://code.claude.com/docs/en/quickstart</a
        >
      </p>
      <p>簡要步驟如下：</p>
      <ol>
        <li>
          安裝 Claude Code
          <ol>
            <li>macOS（Homebrew）：<code>brew install --cask claude-code</code></li>
            <li>macOS / Linux / WSL：<code>curl -fsSL https://claude.ai/install.sh | bash</code></li>
            <li>
              Windows CMD：
              <code>curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd</code>
            </li>
          </ol>
        </li>
        <li>
          安裝完成後，在終端機執行 <code>claude</code>。首次執行會提示你進行認證。
        </li>
      </ol>
      <p>如果你使用 AWS Bedrock 或 Google Cloud Vertex，還需要額外配置：</p>
      <ul>
        <li>
          AWS Bedrock 說明：
          <a href="https://code.claude.com/docs/en/amazon-bedrock"
            >https://code.claude.com/docs/en/amazon-bedrock</a
          >
        </li>
        <li>
          Google Cloud Vertex 說明：
          <a href="https://code.claude.com/docs/en/google-vertex-ai"
            >https://code.claude.com/docs/en/google-vertex-ai</a
          >
        </li>
      </ul>
    `
  },
  {
    slug: '05-project-setup',
    title: '專案準備',
    navTitle: '05 專案準備',
    type: '講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/301615',
    content: `
      <p>有一個可以操作的專案，會讓你在 Claude Code 中練習時更有意思。</p>
      <p>
        我準備了一個小專案供你探索，它就是前面影片裡演示的 UI 生成應用。<strong>注意：</strong
        >你不一定需要執行這個專案，如果你願意，也可以用自己的代碼庫跟隨課程。
      </p>

      <h2>準備步驟</h2>
      <p>該專案需要一些基礎設置：</p>
      <ol>
        <li>
          確保本地安裝了 Node.js。安裝說明：
          <a href="https://nodejs.org/en/download">https://nodejs.org/en/download</a>
        </li>
        <li>下載本節附帶的 <code>uigen.zip</code> 並解壓</li>
        <li>在專案目錄執行 <code>npm run setup</code>，安裝依賴並初始化本地 SQLite 資料庫</li>
        <li>
          <strong>可選：</strong>該專案使用 Anthropic API 調用 Claude 生成 UI 組件。
          如果你想完整體驗應用，需要提供 API Key（不提供也能生成靜態假數據）。
          <ol>
            <li>
              在
              <a href="https://console.anthropic.com/"
                >https://console.anthropic.com/</a
              >
              獲取 API Key
            </li>
            <li>將 API Key 寫入 <code>.env</code> 檔案</li>
          </ol>
        </li>
        <li>執行 <code>npm run dev</code> 啟動專案</li>
      </ol>
    `
  },
  {
    slug: '06-adding-context',
    title: '添加上下文',
    navTitle: '06 添加上下文',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303239',
    content: `
      <p>
        為了讓 Claude 給出好的答案，你需要給它提供相關的資訊——這就是所謂的“上下文”。
        如果你不給它看程式碼，它也沒法幫你debug。
      </p>

      <h2>Claude 如何管理上下文</h2>
      <p>Claude Code 會自動幫你管理很多上下文：</p>
      <ul>
        <li>它能看到你的終端機歷史</li>
        <li>它能讀取你當前的工作目錄結構</li>
        <li>它會記住之前的對話內容</li>
      </ul>
      <p>除此之外，你還需要主動添加一些它看不到的資訊。</p>

      <h2>主動添加上下文的方法</h2>
      <p>你可以通過 <code>/add</code> 命令（或簡寫 <code>/a</code>）來添加：</p>
      <ul>
        <li><strong>檔案</strong>：<code>/add src/main.js</code></li>
        <li><strong>目錄</strong>：<code>/add src/utils</code>（會遞歸添加目錄下所有檔案）</li>
        <li><strong>網頁</strong>：<code>/add https://docs.example.com</code>（Claude 會讀取網頁內容）</li>
      </ul>

      <h2>最佳實踐</h2>
      <p>不要一股腦把整個專案都加進去（雖然 Claude 上下文窗口很大），保持精簡是個好習慣：</p>
      <ul>
        <li>只添加與當前任務相關的檔案</li>
        <li>利用 <code>/map</code> 查看專案結構，快速定位需要添加的檔案</li>
        <li>如果上下文太多，Claude 可能會“注意力分散”，影響回答的精準度</li>
      </ul>
    `
  },
  {
    slug: '07-making-changes',
    title: '進行修改',
    navTitle: '07 進行修改',
    type: '講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303241',
    content: `
      <p>Claude Code 最強大的地方在於它不僅能讀，還能寫。它可以直接修改你的檔案。</p>

      <h2>工作流程</h2>
      <p>當你要求 Claude 進行修改（例如：“把按鈕顏色改成紅色”）：</p>
      <ol>
        <li>它會閱讀相關程式碼</li>
        <li>它會提出修改建議，並顯示 Diff（差異對比）</li>
        <li><strong>等待你批准</strong>：這點很重要，它不會悄悄修改你的代碼。</li>
      </ol>
      <p>你需要按 <code>y</code> 確認，或者按 <code>n</code> 拒絕。也可以輸入文字進行反饋。</p>

      <h2>如果修改出錯了怎麼辦？</h2>
      <p>
        Claude Code 集成了 Git（如果你專案在 git 倉庫中）。如果你不滿意它的修改，或者發現改壞了東西，
        你可以直接使用 <code>/undo</code> 命令撤銷上一次修改。
      </p>

      <h2>執行命令</h2>
      <p>除修改檔案外，Claude 還可以執行終端命令：</p>
      <ul>
        <li>執行測試：<code>npm test</code></li>
        <li>安裝依賴：<code>npm install lodash</code></li>
        <li>列出檔案：<code>ls -la</code></li>
      </ul>
      <p>
        同樣，對於可能產生副作用的命令，它會先詢問你的許可。
      </p>
    `
  },
  {
    slug: '08-course-satisfaction-survey',
    title: '課程滿意度調查',
    navTitle: '08 課程滿意度調查',
    type: '調查',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/301616',
    content: `
      <p>請在原課程平台填寫課後滿意度調查，讓我們知道如何改進！</p>
    `
  },
  {
    slug: '09-controlling-context',
    title: '控制上下文',
    navTitle: '09 控制上下文',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303237',
    content: `
      <p>
        處理複雜任務時，你經常需要引導對話保持聚焦。下面這些技巧可以幫助你控制對話流，避免 Claude 走偏。
      </p>

      <h2>用 Esc 中斷 Claude</h2>
      <p>
        當 Claude 開始偏離方向或一次性處理過多任務時，你可以按 Esc 中斷它的響應，隨後重新明確目標。
      </p>
      <p>
        例如你讓 Claude 為多個函數寫測試，它可能開始規劃整套測試體系。此時按 Esc，中斷後讓它先寫一個函數的測試。
      </p>

      <h2>Esc + 記憶的組合</h2>
      <p>Esc 的一個強大用途是修復重複性錯誤：</p>
      <ul>
        <li>按 Esc 停止當前回復</li>
        <li>用 <code>#</code> 添加一條記憶（正確的做法）</li>
        <li>繼續對話，讓 Claude 按新記憶執行</li>
      </ul>
      <p>這樣可以避免 Claude 在未來對話中重複同樣的錯誤。</p>

      <h2>回退對話</h2>
      <p>
        長對話容易積累大量無關上下文。例如排錯過程可能對下一任務無用。此時可以按 Esc 兩次“回退對話”：
      </p>
      <ul>
        <li>保留有價值的上下文（例如對代碼庫的理解）</li>
        <li>刪除無用或干擾性的對話內容</li>
        <li>讓 Claude 專注於當前任務</li>
      </ul>

      <h2>上下文管理命令</h2>
      <p>Claude 提供了一個專門管理上下文的命令：</p>

      <h3>/compact</h3>
      <p>
        <code>/compact</code> 會總結整個對話並保留關鍵要點。適用於：
      </p>
      <ul>
        <li>Claude 已學習到專案的重要資訊</li>
        <li>你要繼續相關任務但希望對話更短</li>
        <li>對話變長但仍有價值資訊需要保留</li>
      </ul>

      <h3>/clear</h3>
      <p>
        <code>/clear</code> 會清空對話上下文，適用於：
      </p>
      <ul>
        <li>切換到完全不相關的新任務</li>
        <li>舊上下文可能干擾新任務</li>
        <li>需要徹底重來</li>
      </ul>

      <h2>何時使用這些技巧</h2>
      <p>這些控制技巧特別適用於：</p>
      <ul>
        <li>長對話導致上下文雜亂</li>
        <li>任務切換時擔心上下文干擾</li>
        <li>Claude 重複犯錯</li>
        <li>複雜專案需要保持聚焦</li>
      </ul>
      <p>
        靈活使用 Esc、中斷回退、<code>/compact</code> 與 <code>/clear</code>，讓 Claude 在開發流程中保持高效
        與專注。這些不是小技巧，而是高質量 AI 開發會話的基礎能力。
      </p>
    `
  },
  {
    slug: '10-custom-commands',
    title: '自定義命令',
    navTitle: '10 自定義命令',
    type: '影片 + 講義',
    sourceUrl: 'https://anthropic.skilljar.com/claude-code-in-action/303234',
    content: `
      <p>
        Claude Code 內置了一批以斜線開頭的命令，你也可以創建自己的命令，把常見流程自動化。
      </p>

      <h2>創建自定義命令</h2>
      <p>在專案中準備以下目錄結構：</p>
      <ol>
        <li>找到專案中的 <code>.claude</code> 目錄</li>
        <li>在其中創建 <code>commands</code> 目錄</li>
        <li>創建一個以命令名命名的 Markdown 檔案（如 <code>audit.md</code>）</li>
      </ol>
      <p>檔案名就是命令名，因此 <code>audit.md</code> 會生成 <code>/audit</code> 命令。</p>

      <h2>示例：審計依賴的命令</h2>
      <p>一個實用的命令是檢查依賴安全問題：</p>
      <ol>
        <li>執行 <code>npm audit</code> 找出漏洞</li>
        <li>執行 <code>npm audit fix</code> 自動修復</li>
        <li>執行測試驗證修復不破壞功能</li>
      </ol>
      <p>創建命令檔案後，需要重啟 Claude Code 才能識別新命令。</p>

      <h2>帶參數的命令</h2>
      <p>自定義命令可以使用 <code>$ARGUMENTS</code> 佔位符接收參數，從而更靈活。</p>
      <p>例如 <code>write_tests.md</code>：</p>
      <pre><code>Write comprehensive tests for: $ARGUMENTS

Testing conventions:
* Use Vitests with React Testing Library
* Place test files in a __tests__ directory in the same folder as the source file
* Name test files as [filename].test.ts(x)
* Use @/ prefix for imports

Coverage:
* Test happy paths
* Test edge cases
* Test error states</code></pre>
          <p>調用方式：</p>
          <p><code>/write_tests the use-auth.ts file in the hooks directory</code></p>
          <p>參數可以是任意文字說明，不一定是檔案路徑。</p>

          <h2>關鍵收益</h2>
          <ul>
            <li><strong>自動化</strong>：把重複流程變成一個命令</li>
            <li><strong>一致性</strong>：確保每次執行遵循相同步驟</li>
            <li><strong>上下文</strong>：為 Claude 提供固定的專案約定</li>
            <li><strong>靈活性</strong>：通過參數適配不同場景</li>
          </ul>
          <p>
            自定義命令非常適合專案內的固定流程，例如測試、部署、代碼生成等。
          </p>
    `
  }
];
