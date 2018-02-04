var searchInputId = '#search_commands';
var tableId = '#commands_table';
var notFoundDiv = '#command_not_found';

var extendSearchToggle = '#extend_search_toggle';
var extendSearchIcon = '#extend_search_icon';
var extendSearchText = '#extend_search_text';

var rowClass = 'commands_row';
var columnClass = 'commands_cell';

var downIcon = 'fa-chevron-down';
var upIcon = 'fa-chevron-up';

var lessImportantRows = '.less_important';

var moreResultMsg = 'More Results';
var lessResultMsg = 'Less Results';

function moreResultsEnabled(){
  return $(extendSearchIcon).hasClass(downIcon);
}

function titleize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// on more result, toggle the less important rows
$(document).on('click', extendSearchToggle, function(){
  if($(extendSearchIcon).hasClass(upIcon))
  {
    $(lessImportantRows).show();
    $(extendSearchIcon).removeClass(upIcon);
    $(extendSearchIcon).addClass(downIcon);
    $(extendSearchText).text(lessResultMsg + ' ');
  }else{
    $(lessImportantRows).hide();
    $(extendSearchIcon).removeClass(downIcon);
    $(extendSearchIcon).addClass(upIcon);
    $(extendSearchText).text(moreResultMsg + ' ');
  }
  // Refresh the search result again with more results
  var e = $.Event('keyup');
  $(searchInputId).trigger(e);
});

var hightlighter_prefix = "<span class=\"highlight\">";
var hightlighter_suffix = '</span>';

// Undo previous highlight, removing highlight class
function removeHighlight(tableId){
  var table_html =  $(tableId).html();
  var preIndex = table_html.indexOf(hightlighter_prefix)+24;
  var postIndex = preIndex + table_html.substring(preIndex).indexOf(hightlighter_suffix);
  var prev_search = table_html.substring(preIndex, postIndex);
  var regExp = new RegExp('('+hightlighter_prefix+')'+prev_search+'('+hightlighter_suffix+')', 'ig');
  $(tableId).html($(tableId).html().replace(regExp,function(match){
    return match.replace(hightlighter_prefix, '').replace(hightlighter_suffix, '');
  }));
}

// Characters that match up with search enclose them with highlight class
function hightlight(search_value, tableId){
  removeHighlight(tableId);
  // highlight new query
  if(search_value.length > 0){
    var search_regexp = new RegExp(search_value, 'ig');
    var cells = document.getElementsByClassName(columnClass);
    for(var i=0;i<cells.length;i++)
    {
      if(cells[i].innerHTML.indexOf('keybd') >= 0)
        continue;
      cells[i].innerHTML = cells[i].innerHTML.replace(search_regexp, function(match){
        return hightlighter_prefix + match + hightlighter_suffix;
      });
    }
  }
}

$(document).ready(function(){

  $(lessImportantRows).hide();
  $(notFoundDiv).hide();

  // When something is entered in search box
  $(searchInputId).keyup(function(){
    var search_value = $(this).val();
    var rows = document.getElementsByClassName(rowClass);
    var found = false;

    if(search_value.length > 0){

      for(var i=0; i<rows.length; i++)
      {
        current_row = rows[i];
        if(current_row.textContent.toLowerCase().indexOf(search_value.toLowerCase()) > -1)
        {
          $(current_row).show();
          found = true;
        }
        else
          $(current_row).hide();
      }

      afterSearch(found, search_value);
    }
    else{
      removeHighlight(tableId);
      $('.'+rowClass).show();
      afterSearch(true, search_value);
      if(!moreResultsEnabled())
        $(lessImportantRows).hide();
    }
  });
  //keyup function end
});

// Things to be done after search success or not. Here, showing 'Not Found' message
function afterSearch(found, search_value = ''){
  if(found){
    $(notFoundDiv).hide();
    hightlight(search_value, tableId);
  }
  else{
    $(notFoundDiv).show();
    if(moreResultsEnabled())
      $(notFoundDiv).text("Sorry, keyword you searched not found, try alternate synonym!");
    else
      $(notFoundDiv).text("Couldn't find. Try 'More Results' near the search bar.");
  }
}