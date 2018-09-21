const datas = {
    title: "Visual Studio Code默认快捷键",
    author: "奔跑的前端猿",
    lsit: [{
            title: "常用 General",
            id: "general",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "Ctrl + Shift + P，F1",
                    features: "显示命令面板 Show Command Palette"
                },
                {
                    key: "Ctrl + P",
                    features: "快速打开 Quick Open"
                },
                {
                    key: "Ctrl + Shift + N",
                    features: "新窗口/实例 New window/instance"
                },
                {
                    key: "Ctrl + Shift + W",
                    features: "关闭窗口/实例 Close window/instance"
                }
            ]
        },
        {
            title: "基础编辑 Basic editing",
            id: "basic_editing",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "Ctrl+X",
                    features: "剪切行（空选定） Cut line (empty selection)"
                },
                {
                    key: "Ctrl+C",
                    features: "复制行（空选定）Copy line (empty selection)"
                },
                {
                    key: "Alt+ ↑ / ↓",
                    features: "向上/向下移动行 Move line up/down"
                },
                {
                    key: "Shift+Alt + ↓ / ↑",
                    features: "向上/向下复制行 Copy line up/down"
                },
                {
                    key: "Ctrl+Shift+K",
                    features: "删除行 Delete line"
                },
                {
                    key: "Ctrl+Enter",
                    features: "在下面插入行 Insert line below"
                },
                {
                    key: "Ctrl+Shift+Enter",
                    features: "在上面插入行 Insert line above"
                },
                {
                    key: "Ctrl+Shift+\\",
                    features: "跳到匹配的括号 Jump to matching bracket"
                },
                {
                    key: "Ctrl+] / [",
                    features: "缩进/缩进行 Indent/outdent line"
                },
                {
                    key: "Home",
                    features: "转到行首 Go to beginning of line"
                },
                {
                    key: "End",
                    features: "转到行尾 Go to end of line"
                },
                {
                    key: "Ctrl+Home",
                    features: "转到文件开头 Go to beginning of file"
                },
                {
                    key: "Ctrl+End",
                    features: "转到文件末尾 Go to end of file"
                },
                {
                    key: "Ctrl+↑ / ↓",
                    features: "向上/向下滚动行 Scroll line up/down"
                },
                {
                    key: "Alt+PgUp / PgDown",
                    features: "向上/向下滚动页面 Scroll page up/down"
                },
                {
                    key: "Ctrl+Shift+[",
                    features: "折叠（折叠）区域 Fold (collapse) region"
                },
                {
                    key: "Ctrl+Shift+]",
                    features: "展开（未折叠）区域 Unfold (uncollapse) region"
                },
                {
                    key: "Ctrl+K Ctrl+[",
                    features: "折叠（未折叠）所有子区域 Fold (collapse) all subregions"
                },
                {
                    key: "Ctrl+K Ctrl+]",
                    features: "展开（未折叠）所有子区域 Unfold (uncollapse) all subregions"
                },
                {
                    key: "Ctrl+K Ctrl+0",
                    features: "折叠（折叠）所有区域 Fold (collapse) all regions"
                },
                {
                    key: "Ctrl+K Ctrl+J",
                    features: "展开（未折叠）所有区域 Unfold (uncollapse) all regions"
                },
                {
                    key: "Ctrl+K Ctrl+C",
                    features: "添加行注释 Add line comment"
                },
                {
                    key: "Ctrl+K Ctrl+U",
                    features: "删除行注释 Remove line comment"
                },
                {
                    key: "Ctrl+/",
                    features: "切换行注释 Toggle line comment"
                },
                {
                    key: "Shift+Alt+A",
                    features: "切换块注释 Toggle block comment"
                },
                {
                    key: "Alt+Z",
                    features: "切换换行 Toggle word wrap"
                }
            ]
        },
        {
            title: "导航 Navigation",
            id: "navigation",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "Ctrl + T",
                    features: "显示所有符号 Show all Symbols"
                },
                {
                    key: "Ctrl + G",
                    features: "转到行... Go to Line..."
                },
                {
                    key: ">Ctrl + P",
                    features: "转到文件... Go to File..."
                },
                {
                    key: "Ctrl + Shift + O",
                    features: "转到符号... Go to Symbol..."
                },
                {
                    key: "Ctrl + Shift + M",
                    features: "显示问题面板 Show Problems panel"
                },
                {
                    key: "F8",
                    features: "转到下一个错误或警告 Go to next error or warning"
                },
                {
                    key: "Shift + F8",
                    features: "转到上一个错误或警告 Go to previous error or warning"
                },
                {
                    key: "Ctrl + Shift + Tab",
                    features: "导航编辑器组历史记录 Navigate editor group history"
                },
                {
                    key: "Alt + ←/→",
                    features: "返回/前进 Go back / forward"
                },
                {
                    key: "Ctrl + M",
                    features: "切换选项卡移动焦点 Toggle Tab moves focus"
                }
            ]
        },
        {
            title: "搜索和替换 Search and replace",
            id: "search_and_replace",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "Ctrl + F",
                    features: "查找 Find"
                },
                {
                    key: "Ctrl + H",
                    features: "替换 Replace"
                },
                {
                    key: "F3 / Shift + F3",
                    features: "查找下一个/上一个 Find next/previous"
                },
                {
                    key: "Alt + Enter",
                    features: "选择查找匹配的所有出现 Select all occurences of Find match"
                },
                {
                    key: "Ctrl + D",
                    features: "将选择添加到下一个查找匹配 Add selection to next Find match"
                },
                {
                    key: "Ctrl + K Ctrl + D",
                    features: "将最后一个选择移至下一个查找匹配项 Move last selection to next Find match"
                },
                {
                    key: "Alt + C / R / W",
                    features: "切换区分大小写/正则表达式/整个词 Toggle case-sensitive / regex / whole word"
                }
            ]
        },
        {
            title: "多光标和选择 Multi-cursor and selection",
            id: "multi_cursor_and_selection",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "Alt +单击",
                    features: "插入光标 Insert cursor"
                },
                {
                    key: "Ctrl + Alt +↑/↓",
                    features: "在上/下插入光标 Insert cursor above / below"
                },
                {
                    key: "Ctrl + U",
                    features: "撤消上一个光标操作 Undo last cursor operation"
                },
                {
                    key: "Shift + Alt + ",
                    features: "在选定的每一行的末尾插入光标 Insert cursor at end of each line selected"
                },
                {
                    key: "Ctrl + I",
                    features: "选择当前行 Select current line"
                },
                {
                    key: "Ctrl + Shift + L",
                    features: "选择当前选择的所有出现 Select all occurrences of current selection"
                },
                {
                    key: "Ctrl + F2",
                    features: "选择当前字的所有出现 Select all occurrences of current word"
                },
                {
                    key: "Shift + Alt + →",
                    features: "展开选择 Expand selection"
                },
                {
                    key: "Shift + Alt + ←",
                    features: "缩小选择 Shrink selection"
                },
                {
                    key: "Shift + Alt + （拖动鼠标）",
                    features: "列（框）选择 Column (box) selection"
                },
                {
                    key: "Ctrl + Shift + Alt +（箭头键）",
                    features: "列（框）选择 Column (box) selection"
                },
                {
                    key: "Ctrl + Shift + Alt + PgUp / PgDown",
                    features: "列（框）选择页上/下 Column (box) selection page up/down"
                }
            ]
        },
        {
            title: "丰富的语言编辑 Rich languages editing",
            id: "rich_languages_editing",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "Ctrl + 空格",
                    features: "触发建议 Trigger suggestion"
                },
                {
                    key: "Ctrl + Shift + Space",
                    features: "触发器参数提示 Trigger parameter hints"
                },
                {
                    key: "Tab",
                    features: "Emmet 展开缩写 Emmet expand abbreviation"
                },
                {
                    key: "Shift + Alt + F",
                    features: "格式化文档 Format document"
                },
                {
                    key: "Ctrl + K Ctrl + F",
                    features: "格式选定区域 Format selection"
                },
                {
                    key: "F12",
                    features: "转到定义 Go to Definition"
                },
                {
                    key: "Alt + F12",
                    features: "Peek定义 Peek Definition"
                },
                {
                    key: "Ctrl + K F12",
                    features: "打开定义到边 Open Definition to the side"
                },
                {
                    key: "Ctrl + .",
                    features: "快速解决 Quick Fix"
                },
                {
                    key: "Shift + F12",
                    features: "显示引用 Show References"
                },
                {
                    key: "F2",
                    features: "重命名符号 Rename Symbol"
                },
                {
                    key: "Ctrl + K Ctrl + X",
                    features: "修剪尾随空格 Trim trailing whitespace"
                },
                {
                    key: "Ctrl + K M",
                    features: "更改文件语言 Change file language"
                }
            ]
        },
        {
            title: "编辑器管理 Editor management",
            id: "editor_management",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "Ctrl+F4, Ctrl+W",
                    features: "关闭编辑器 Close editor"
                },
                {
                    key: "Ctrl+K F",
                    features: "关闭文件夹 Close folder"
                },
                {
                    key: "Ctrl+\\",
                    features: "拆分编辑器 Split editor"
                },
                {
                    key: "Ctrl+ 1 / 2 / 3",
                    features: "聚焦到第1，第2或第3编辑器组 Focus into 1st, 2nd or 3rd editor group"
                },
                {
                    key: "Ctrl+K Ctrl+ ←/→",
                    features: "聚焦到上一个/下一个编辑器组 Focus into previous/next editor group"
                },
                {
                    key: "Ctrl+Shift+PgUp / PgDown",
                    features: "向左/向右移动编辑器 Move editor left/right"
                },
                {
                    key: "Ctrl+K ← / →",
                    features: "移动活动编辑器组 Move active editor group"
                },
            ]
        },
        {
            title: "文件管理 File management",
            id: "file_management",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "Ctrl+N",
                    features: "新文件 New File"
                },
                {
                    key: "Ctrl+O",
                    features: "打开文件... Open File..."
                },
                {
                    key: "Ctrl+S",
                    features: "保存 Save"
                },
                {
                    key: "Ctrl + Shift + W",
                    features: "关闭窗口/实例 Close window/instance"
                },
                {
                    key: "Ctrl+Shift+S",
                    features: "另存为... Save As..."
                },
                {
                    key: "Ctrl+K S",
                    features: "全部保存 Save All"
                },
                {
                    key: "Ctrl+F4",
                    features: "关闭 Close"
                },
                {
                    key: "Ctrl+K Ctrl+W",
                    features: "关闭所有 Close All"
                },
                {
                    key: "Ctrl+Shift+T",
                    features: "重新打开关闭的编辑器 Reopen closed editor"
                },
                {
                    key: "Ctrl+K",
                    features: "输入保持打开 Enter Keep Open"
                },
                {
                    key: "Ctrl+Tab",
                    features: "打开下一个 Open next"
                },
                {
                    key: "Ctrl+Shift+Tab",
                    features: "打开上一个 Open previous"
                },
                {
                    key: "Ctrl+K P",
                    features: "复制活动文件的路径 Copy path of active file"
                },
                {
                    key: "Ctrl+K R",
                    features: "显示资源管理器中的活动文件 Reveal active file in Explorer"
                },
                {
                    key: "Ctrl+K O",
                    features: "显示新窗口/实例中的活动文件 Show active file in new window/instance"
                }
            ]
        },
        {
            title: "显示 Display",
            id: "display",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "F11",
                    features: "切换全屏 Toggle full screen"
                },
                {
                    key: "Shift+Alt+1",
                    features: "切换编辑器布局 Toggle editor layout"
                },
                {
                    key: "Ctrl+ = / -",
                    features: "放大/缩小 Zoom in/out"
                },
                {
                    key: "Ctrl+B",
                    features: "切换侧栏可见性 Toggle Sidebar visibility"
                },
                {
                    key: "Ctrl+Shift+E",
                    features: "显示浏览器/切换焦点 Show Explorer / Toggle focus"
                },
                {
                    key: "Ctrl+Shift+F",
                    features: "显示搜索 Show Search"
                },
                {
                    key: "Ctrl+Shift+G",
                    features: "显示Git Show Git"
                },
                {
                    key: "Ctrl+Shift+D",
                    features: "显示调试 Show Debug"
                },
                {
                    key: "Ctrl+Shift+X",
                    features: "显示扩展 Show Extensions"
                },
                {
                    key: "Ctrl+Shift+H",
                    features: "替换文件 Replace in files"
                },
                {
                    key: "Ctrl+Shift+J",
                    features: "切换搜索详细信息 Toggle Search details"
                },
                {
                    key: "Ctrl+Shift+C",
                    features: "打开新命令提示符/终端 Open new command prompt/terminal"
                },
                {
                    key: "Ctrl+Shift+U",
                    features: "显示输出面板 Show Output panel"
                },
                {
                    key: "Ctrl+Shift+V",
                    features: "切换Markdown预览 Toggle Markdown preview"
                },
                {
                    key: "Ctrl+K V",
                    features: "从旁边打开Markdown预览 Open Markdown preview to the side"
                }
            ]
        },
        {
            title: "调试 Debug",
            id: "debug",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "F9",
                    features: "切换断点 Toggle breakpoint"
                },
                {
                    key: "F5",
                    features: "开始/继续 Start/Continue"
                },
                {
                    key: "Shift+F5",
                    features: "停止 Stop"
                },
                {
                    key: "F11 / Shift+F11",
                    features: "下一步/上一步 Step into/out"
                },
                {
                    key: "F10",
                    features: "跳过 Step over"
                },
                {
                    key: "Ctrl+K Ctrl+I",
                    features: "显示悬停 Show hover"
                }
            ]
        },
        {
            title: "集成终端 Integrated terminal",
            id: "integrated_terminal",
            t_title: ["按 Press", "功能 Function"],
            hoy_key: [{
                    key: "Ctrl+`",
                    features: "显示集成终端 Show integrated terminal"
                },
                {
                    key: "Ctrl+Shift+`",
                    features: "创建新终端 Create new terminal"
                },
                {
                    key: "Ctrl+Shift+C",
                    features: "复制选定 Copy selection"
                },
                {
                    key: "Ctrl+Shift+V",
                    features: "粘贴到活动端子 Paste into active terminal"
                },
                {
                    key: "Ctrl+↑ / ↓",
                    features: "向上/向下滚动 Scroll up/down"
                },
                {
                    key: "Shift+PgUp / PgDown",
                    features: "向上/向下滚动页面 Scroll page up/down"
                },
                {
                    key: "Ctrl+Home / End",
                    features: "滚动到顶部/底部 Scroll to top/bottom"
                }
            ]
        },

    ]
}

module.exports = datas;