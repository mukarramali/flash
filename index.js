function getHeadings(){
  return ["basic", "sublime", "vim", "emacs"];
}

function getData(heading){
  var data = {
    "basic":
      [
        {
          "important":true,
          "function":"help",
          "keyMap":"^⇧H",
          "usage":"find shortcuts for the editor"
        },
        {
          "important":false,
          "function":"selectAll",
          "keyMap":"⌘A",
          "usage":"Select the whole content"
        },
        {
          "important":false,
          "function":"singleSelection",
          "keyMap":"Esc",
          "usage":"this deselects multiple selection except the primary one"
        },
        {
          "important":false,
          "function":"deleteLine",
          "keyMap":"⌘D",
          "usage":"Deletes/Removes the line under the cursor"
        },
        {
          "important":false,
          "function":"redo",
          "keyMap":"⌘Y",
          "usage":"Redo the last undone change"
        },
        {
          "important":false,
          "function":"goDocStart",
          "keyMap":"⌘Up",
          "usage":"Move the cursor to the start/beginning of the document"
        },
        {
          "important":false,
          "function":"goDocEnd",
          "keyMap":"⌘Down",
          "usage":"Move the cursor to the end of the document"
        },
        {
          "important":true,
          "function":"goLineStart",
          "keyMap":"⌃A",
          "usage":"Move the cursor to the start of the line"
        },
        {
          "important":false,
          "function":"goLineStart",
          "keyMap":"Home",
          "usage":"Move to the start of the text on the line"
        },
        {
          "important":true,
          "function":"goLineEnd",
          "keyMap":"⌥⌃E",
          "usage":"Move the cursor to the end of the line"
        },
        {
          "important":false,
          "function":"goLineRight",
          "keyMap":"⌘Right",
          "usage":"Move the cursor to the right side of the visual line it is on"
        },
        {
          "important":false,
          "function":"goLineUp",
          "keyMap":"Up",
          "usage":"Move the cursor up one line"
        },
        {
          "important":false,
          "function":"goLineDown",
          "keyMap":"Down",
          "usage":"Move down one line"
        },
        {
          "important":false,
          "function":"goPageUp",
          "keyMap":"⇧⌃V",
          "usage":"Move the cursor up one screen"
        },
        {
          "important":false,
          "function":"goPageDown",
          "keyMap":"⌃V",
          "usage":"Move the cursor down one screen"
        },
        {
          "important":false,
          "function":"goCharLeft",
          "keyMap":"⌃B",
          "usage":"Move the cursor one character left"
        },
        {
          "important":false,
          "function":"goCharRight",
          "keyMap":"⌃F",
          "usage":"Move the cursor one character right"
        },
        {
          "important":false,
          "function":"goWordLeft",
          "keyMap":"⌥B",
          "usage":"Move the cursor to the start of the previous word"
        },
        {
          "important":false,
          "function":"goWordRight",
          "keyMap":"⌥F",
          "usage":"Move the cursor to the end of the next word"
        },
        {
          "important":false,
          "function":"goGroupLeft",
          "keyMap":"⌥Left",
          "usage":"Move to the left of the group before the cursor"
        },
        {
          "important":false,
          "function":"goGroupRight",
          "keyMap":"⌥Right",
          "usage":"Move to the right of the group after the cursor"
        },
        {
          "important":false,
          "function":"delCharBefore",
          "keyMap":"⇧⌫",
          "usage":"Delete the character before the cursor"
        },
        {
          "important":false,
          "function":"delCharAfter",
          "keyMap":"⌃D",
          "usage":"Delete/Remove the character after the cursor"
        },
        {
          "important":true,
          "function":"delWordBefore",
          "keyMap":"⌥⌫",
          "usage":"Delete up to the start of the word before the cursor or the first whitespace"
        },
        {
          "important":true,
          "function":"delWordAfter",
          "keyMap":"⌥D",
          "usage":"Delete up to the end of the word after the cursor"
        },
        {
          "important":false,
          "function":"delGroupBefore",
          "keyMap":"⌥⌫",
          "usage":"Delete to the left of the group before the cursor"
        },
        {
          "important":false,
          "function":"delGroupAfter",
          "keyMap":"⌥Delete",
          "usage":"Delete to the start of the group after the cursor"
        },
        {
          "important":false,
          "function":"indentAuto",
          "keyMap":"⇧Tab",
          "usage":"Autoindent the current line or selection"
        },
        {
          "important":false,
          "function":"transposeChars",
          "keyMap":"⌃T",
          "usage":"Swap the characters before and after the cursor"
        },
        {
          "important":false,
          "function":"newlineAndIndent",
          "keyMap":"Enter",
          "usage":"Insert a newline and autoindent the new line"
        },
        {
          "important":false,
          "function":"toggleOverwrite",
          "keyMap":"Insert",
          "usage":"Flip the overwrite flag"
        },
        {
          "important":false,
          "function":"save",
          "keyMap":"⌘S",
          "usage":""
        },
        {
          "important":true,
          "function":"indentMore",
          "keyMap":"⌘]",
          "usage":"Indent the current line or selection by one indent unit"
        },
        {
          "important":true,
          "function":"indentLess",
          "keyMap":"⌘[",
          "usage":"Dedent the current line or selection by one indent unit"
        }
      ],
    "sublime":
      [
        {
          "important":true,
          "function":"replaceAll",
          "keyMap":"⇧⌘⌥F"
        },
        {
          "important":false,
          "function":"goLineStartSmart",
          "keyMap":"⌘Left"
        },
        {
          "important":false,
          "function":"indentLess",
          "keyMap":"⇧Tab"
        },
        {
          "important":true,
          "function":"deleteLine",
          "keyMap":"⇧⌃K"
        },
        {
          "important":false,
          "function":"wrapLines",
          "keyMap":"⌥Q"
        },
        {
          "important":false,
          "function":"goSubwordLeft",
          "keyMap":"⌃Left"
        },
        {
          "important":false,
          "function":"goSubwordRight",
          "keyMap":"⌃Right"
        },
        {
          "important":false,
          "function":"scrollLineUp",
          "keyMap":"⌃⌥Up"
        },
        {
          "important":false,
          "function":"scrollLineDown",
          "keyMap":"⌃⌥Down"
        },
        {
          "important":true,
          "function":"selectLine",
          "keyMap":"⌘L"
        },
        {
          "important":false,
          "function":"splitSelectionByLine",
          "keyMap":"⇧⌘L"
        },
        {
          "important":false,
          "function":"singleSelectionTop",
          "keyMap":"Esc"
        },
        {
          "important":false,
          "function":"insertLineAfter",
          "keyMap":"⌘Enter"
        },
        {
          "important":false,
          "function":"insertLineBefore",
          "keyMap":"⇧⌘Enter"
        },
        {
          "important":true,
          "function":"selectNextOccurrence",
          "keyMap":"⌘D"
        },
        {
          "important":false,
          "function":"addCursorToPrevLine",
          "keyMap":"⇧⌘Up"
        },
        {
          "important":false,
          "function":"addCursorToNextLine",
          "keyMap":"⇧⌘Down"
        },
        {
          "important":true,
          "function":"selectScope",
          "keyMap":"⇧⌘Space"
        },
        {
          "important":false,
          "function":"selectBetweenBrackets",
          "keyMap":"⇧⌘M"
        },
        {
          "important":true,
          "function":"goToBracket",
          "keyMap":"⌘M"
        },
        {
          "important":true,
          "function":"swapLineUp",
          "keyMap":"⌘⌃Up"
        },
        {
          "important":false,
          "function":"swapLineDown",
          "keyMap":"⌘⌃Down"
        },
        {
          "important":false,
          "function":"toggleCommentIndented",
          "keyMap":"⌘/"
        },
        {
          "important":false,
          "function":"joinLines",
          "keyMap":"⌘J"
        },
        {
          "important":false,
          "function":"duplicateLine",
          "keyMap":"⇧⌘D"
        },
        {
          "important":false,
          "function":"sortLines",
          "keyMap":"F9"
        },
        {
          "important":true,
          "function":"sortLinesInsensitive",
          "keyMap":"⌘F9"
        },
        {
          "important":false,
          "function":"nextBookmark",
          "keyMap":"F2"
        },
        {
          "important":false,
          "function":"prevBookmark",
          "keyMap":"⇧F2"
        },
        {
          "important":false,
          "function":"toggleBookmark",
          "keyMap":"⌘F2"
        },
        {
          "important":false,
          "function":"clearBookmarks",
          "keyMap":"⌘K ⌘G"
        },
        {
          "important":false,
          "function":"selectBookmarks",
          "keyMap":"⌥F2"
        },
        {
          "important":false,
          "function":"smartBackspace",
          "keyMap":"⌫"
        },
        {
          "important":false,
          "function":"delLineRight",
          "keyMap":"⌘K ⌘K"
        },
        {
          "important":false,
          "function":"upcaseAtCursor",
          "keyMap":"⌘K ⌘U"
        },
        {
          "important":false,
          "function":"downcaseAtCursor",
          "keyMap":"⌘K ⌘L"
        },
        {
          "important":true,
          "function":"setSublimeMark",
          "keyMap":"⌘K ⌘Space"
        },
        {
          "important":false,
          "function":"selectToSublimeMark",
          "keyMap":"⌘K ⌘A"
        },
        {
          "important":false,
          "function":"deleteToSublimeMark",
          "keyMap":"⌘K ⌘W"
        },
        {
          "important":false,
          "function":"sublimeYank",
          "keyMap":"⌘K ⌘Y"
        },
        {
          "important":false,
          "function":"showInCenter",
          "keyMap":"⌘K ⌘C"
        },
        {
          "important":false,
          "function":"delLineLeft",
          "keyMap":"⌘K ⌘⌫"
        },
        {
          "important":false,
          "function":"unfoldAll",
          "keyMap":"⌘K ⌘J"
        },
        {
          "important":false,
          "function":"selectLinesUpward",
          "keyMap":"⌃⇧Up"
        },
        {
          "important":false,
          "function":"selectLinesDownward",
          "keyMap":"⌃⇧Down"
        },
        {
          "important":false,
          "function":"findUnder",
          "keyMap":"⌘F3"
        },
        {
          "important":false,
          "function":"findUnderPrevious",
          "keyMap":"⇧⌘F3"
        },
        {
          "important":false,
          "function":"findAllUnder",
          "keyMap":"⌥F3"
        },
        {
          "important":false,
          "function":"fold",
          "keyMap":"⇧⌘["
        },
        {
          "important":false,
          "function":"unfold",
          "keyMap":"⇧⌘]"
        },
        {
          "important":false,
          "function":"findIncremental",
          "keyMap":"⌘I"
        },
        {
          "important":false,
          "function":"findIncrementalReverse",
          "keyMap":"⇧⌘I"
        },
        {
          "important":true,
          "function":"replace",
          "keyMap":"⌘H"
        },
        {
          "important":true,
          "function":"find",
          "keyMap":"⌘F",
          "usage":"find/search"
        },
        {
          "important":true,
          "function":"findNext",
          "keyMap":"F3",
          "usage":"find/search next occurance"
        },
        {
          "important":false,
          "function":"findPrev",
          "keyMap":"⇧F3",
          "usage":"find/search previous occurance"
        },
        {
          "important":false,
          "function":"transposeChars",
          "keyMap":"^T",
          "usage":"swap next character"
        }
      ],
    "vim":
      [
        {
          "important":true,
          "function":"copyLine",
          "keyMap":"yy",
          "usage":""
        },
        {
          "important":true,
          "function":"copyWord",
          "keyMap":"yw",
          "usage":""
        },
        {
          "important":true,
          "function":"paste",
          "keyMap":"P",
          "usage":""
        },
        {
          "important":true,
          "function":"jumpHistory",
          "keyMap":"⌃O ⌃I",
          "usage":"Move backward/forward through the jump history"
        },
        {
          "important":true,
          "function":"nextOccurrence",
          "keyMap":"#*",
          "usage":"Find next occurance of the token under cursor"
        },
        {
          "important":false,
          "function":"toggleOverwrite",
          "keyMap":"Ins",
          "usage":"Insert"
        },
        {
          "important":true,
          "function":"move",
          "keyMap":"H M L",
          "usage":"Move to the top/middle/bottom of the screen"
        },
        {
          "important":false,
          "function":"moveByLines",
          "keyMap":"_",
          "usage":"Forward true, toFirstChar true, repeatOffset:-1"
        },
        {
          "important":false,
          "function":"moveByDisplayLines",
          "keyMap":"gk",
          "usage":"Forward false"
        },
        {
          "important":true,
          "function":"moveByWords",
          "keyMap":"W",
          "usage":"Forward false, wordEnd false, context insert"
        },
        {
          "important":false,
          "function":"moveByParagraph",
          "keyMap":"}",
          "usage":"Forward true, toJumplist true"
        },
        {
          "important":false,
          "function":"moveByPage",
          "keyMap":"[C-b]",
          "usage":"Forward false"
        },
        {
          "important":false,
          "function":"moveByScroll",
          "keyMap":"[C-u]",
          "usage":"Forward false, explicitRepeat true"
        },
        {
          "important":false,
          "function":"moveToLineOrEdgeOfDocument",
          "keyMap":"G ⇧G",
          "usage":""
        },
        {
          "important":false,
          "function":"moveToStartOfLine",
          "keyMap": 0
        },
        {
          "important":false,
          "function":"moveToFirstNonWhiteSpaceCharacter",
          "keyMap":"^"
        },
        {
          "important":false,
          "function":"moveToMatchedSymbol",
          "keyMap":"%",
          "usage":"Inclusive true, toJumplist true"
        },
        {
          "important":false,
          "function":"moveToCharacter",
          "keyMap":"F[char]",
          "usage":"Forward false"
        },
        {
          "important":false,
          "function":"moveTillCharacter",
          "keyMap":"T[char]",
          "usage":"Forward false"
        },
        {
          "important":false,
          "function":"goToMark",
          "keyMap":"`[char]"
        },
        {
          "important":false,
          "function":"jumpToMark",
          "keyMap":"[\\",
          "usage":"Forward false, linewise true"
        },
        {
          "important":false,
          "function":"moveToSymbol",
          "keyMap":"[[char]",
          "usage":"Forward false, toJumplist true}"
        },
        {
          "important":true,
          "function":"moveToColumn",
          "keyMap":"[Number]|",
          "usage":"32| will jump you to column 32 of current line"
        },
        {
          "important":false,
          "function":"moveToOtherHighlightedEnd",
          "keyMap":"O",
          "usage":"SameLine true, context visual"
        },
        {
          "important":false,
          "function":"delete",
          "keyMap":"D",
          "usage":"Remove or delete"
        },
        {
          "important":false,
          "function":"yank",
          "keyMap":"Y"
        },
        {
          "important":false,
          "function":"change",
          "keyMap":"C"
        },
        {
          "important":false,
          "function":"indent",
          "keyMap":"[C-d]",
          "usage":"Indent indentRight false, context insert"
        },
        {
          "important":false,
          "function":"findNext",
          "keyMap":"N",
          "usage":"Find/search next"
        },
        {
          "important":false,
          "function":"expandToLine",
          "keyMap":"Y",
          "usage":""
        },
        {
          "important":false,
          "function":"jumpListWalk",
          "keyMap":"[C-o]",
          "usage":"Forward false"
        },
        {
          "important":false,
          "function":"scroll",
          "keyMap":"[C-y]",
          "usage":""
        },
        {
          "important":false,
          "function":"enterInsertMode",
          "keyMap":"R",
          "usage":""
        },
        {
          "important":false,
          "function":"newLineAndEnterInsertMode",
          "keyMap":"O",
          "usage":""
        },
        {
          "important":false,
          "function":"toggleVisualMode",
          "keyMap":"[C-q]",
          "usage":"Blockwise true"
        },
        {
          "important":false,
          "function":"reselectLastSelection",
          "keyMap":"gv"
        },
        {
          "important":false,
          "function":"joinLines",
          "keyMap":"J",
          "usage":"IsEdit true"
        },
        {
          "important":false,
          "function":"replace",
          "keyMap":"r[char]",
          "usage":""
        },
        {
          "important":true,
          "function":"undo",
          "keyMap":"U",
          "usage":""
        },
        {
          "important":true,
          "function":"redo",
          "keyMap":"⌃R"
        },
        {
          "important":false,
          "function":"setMark",
          "keyMap":"m[char]"
        },
        {
          "important":false,
          "function":"setRegister",
          "keyMap":"\\[char]"
        },
        {
          "important":false,
          "function":"scrollToCursor",
          "keyMap":"zb",
          "usage":"ScrollToCursor position bottom,  move to first non white space character"
        },
        {
          "important":false,
          "function":"repeatLastEdit",
          "keyMap":"."
        },
        {
          "important":false,
          "function":"textObjectManipulation",
          "keyMap":"i[char]",
          "usage":"TextObjectInner true"
        },
        {
          "important":true,
          "function":"search",
          "keyMap":"?",
          "usage":"Find/search"
        }
      ],
    "emacs":
      [
        {
          "important":false,
          "function":"delete",
          "keyMap" : "⌃W",
          "usage":"delete from start cursor to end cursor position"
        },
        {
          "important":true,
          "function":"deleteLine",
          "keyMap":"⌃K",
          "usage":"delete current line"
        },
        {
          "important":false,
          "function":"move",
          "keyMap":"⌃F",
          "usage":"Move by char 1 forward"
        },
        {
          "important":false,
          "function":"move",
          "keyMap":"⌃B",
          "usage":"Move by char 1 backward"
        },
        {
          "important":false,
          "function":"delete",
          "keyMap":"⌃H",
          "usage":"delete previous char"
        },
        {
          "important":true,
          "function":"move",
          "keyMap":"⌥F",
          "usage":"Move by word forward"
        },
        {
          "important":false,
          "function":"move",
          "keyMap":"⌥B",
          "usage":"Move by word backward"
        },
        {
          "important":true,
          "function":"deleteWord",
          "keyMap":"⌥D",
          "usage":"delete from cursor to next word"
        },
        {
          "important":true,
          "function":"deleteWord",
          "keyMap":"⌥⌫",
          "usage":"delete from cursor to previous word"
        },
        {
          "important":false,
          "function":"move",
          "keyMap":"⌃N",
          "usage":"Move cursor to nextLine"
        },
        {
          "important":false,
          "function":"move",
          "keyMap":"⌃P",
          "usage":"Move cursor to previousLine"
        },
        {
          "important":false,
          "function":"goto",
          "keyMap":"⌃A",
          "usage":"Goto line start"
        },
        {
          "important":false,
          "function":"goto",
          "keyMap":"⌃E",
          "usage":"Goto line end"
        },
        {
          "important":false,
          "function":"goto",
          "keyMap":"Home",
          "usage":"Goto line start"
        },
        {
          "important":false,
          "function":"goto",
          "keyMap":"End",
          "usage":"Goto line end"
        },
        {
          "important":false,
          "function":"move",
          "keyMap":"⌥V",
          "usage":"Move page up"
        },
        {
          "important":false,
          "function":"move",
          "keyMap":"⌃V",
          "usage":"Move to next page"
        },
        {
          "important":false,
          "function":"deleteSentence",
          "keyMap":"⌥K",
          "usage":"delete from cursor to next sentence"
        },
        {
          "important":false,
          "function":"deleteExpr",
          "keyMap":"⌃⌥K",
          "usage":"delete from cursor to next expr"
        },
        {
          "important":false,
          "function":"delete",
          "keyMap":"⌃⌥⌫",
          "usage":"delete from cursor to pre expr"
        },
        {
          "important":false,
          "function":"move",
          "keyMap":"⌃⌥F",
          "usage":"Move to next expr"
        },
        {
          "important":false,
          "function":"move",
          "keyMap":"⌃⌥B",
          "usage":"Move to previous expr"
        },
        {
          "important":false,
          "function":"select",
          "keyMap":"⇧⌃⌥2",
          "usage":"Select from cursor to end of Expr"
        },
        {
          "important":false,
          "function":"replace",
          "keyMap":"⌃⌥T",
          "usage":"Replace range of expr"
        },
        {
          "important":false,
          "function":"goto",
          "keyMap":"⌃⌥U",
          "usage":"Goto enclosing expr"
        },
        {
          "important":false,
          "function":"space",
          "keyMap":"⌥Space",
          "usage":"To enter just one space"
        },
        {
          "important":false,
          "function":"newLine",
          "keyMap":"⌃O",
          "usage":"Adding new line"
        },
        {
          "important":false,
          "function":"transpose",
          "keyMap":"⌃T",
          "usage":"Transpose consecutive chars"
        },
        {
          "important":true,
          "function":"toUpper",
          "keyMap":"⌥C",
          "usage":"First char of words to upper case"
        },
        {
          "important":true,
          "function":"toLower",
          "keyMap":"⌥L",
          "usage":"To lower case"
        },
        {
          "important":true,
          "function":"autocomplete",
          "keyMap":"⌥/",
          "usage":"Autocomplete"
        },
        {
          "important":false,
          "function":"indent",
          "keyMap":"Tab",
          "usage":"IndentAuto"
        }
      ]
  };
  return data[heading];
}
