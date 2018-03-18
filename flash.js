config = {};
function init_flash(searchInputId = 'search_commands', tableId = 'commands_table', targetColumnClass = '', notFoundDiv = 'command_not_found'){

  config['searchInputId'] = '#'+searchInputId;
  config['tableId'] = '#'+tableId;
  config['notFoundDiv'] = '#'+notFoundDiv;

  config['extendSearchToggle'] = '#'+'extend_search_toggle';
  config['extendSearchIcon'] = '#'+'extend_search_icon';
  config['extendSearchText'] = '#'+'extend_search_text';

  config['columnClass'] = '.' + targetColumnClass;

  config['downIcon'] = 'fa-chevron-down';
  config['upIcon'] = 'fa-chevron-up';

  config['lessImportantRows'] = '.less_important';

  config['moreResultMsg'] = 'More Results';
  config['lessResultMsg'] = 'Less Results';

  //Actions to be taken
  $(config['lessImportantRows']).hide();
  $(config['notFoundDiv']).hide();
  // When something is entered in search box
  $(config['searchInputId']).keyup(flash);

  // on more result, toggle the less important rows
  $(document).on('click', config['extendSearchToggle'], toggleSearch);
}

function filterTalash(flag = true, lessImportantRows = '.less_important'){
  if(flag)
    $(config['lessImportantRows']).hide();
  else
    $(config['lessImportantRows']).show();
}

function flash(){
  var search_value = $(config['searchInputId']).val();
  var rows = document.getElementById(config['tableId'].slice(1)).rows;
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
    $(rows).show();
    removeHighlight(config['tableId']);
    afterSearch(true, search_value);
  }
}

function moreResults(){
  return $(config['extendSearchIcon']).hasClass(config['downIcon']);
}

function toggleSearch(){
  if($(config['extendSearchIcon']).hasClass(config['upIcon']))
  {
    $(config['lessImportantRows']).show();
    $(config['extendSearchIcon']).removeClass(config['upIcon']);
    $(config['extendSearchIcon']).addClass(config['downIcon']);
    $(config['extendSearchText']).text(config['lessResultMsg'] + ' ');
  }else{
    $(config['lessImportantRows']).hide();
    $(config['extendSearchIcon']).removeClass(config['downIcon']);
    $(config['extendSearchIcon']).addClass(config['upIcon']);
    $(config['extendSearchText']).text(config['moreResultMsg'] + ' ');
  }
  // Refresh the search result again with more results
  var e = $.Event('keyup');
  $(config['searchInputId']).trigger(e);
}

var hightlighter_prefix = "<span class=\"highlight\">";
var hightlighter_suffix = '</span>';

// Undo previous highlight, removing highlight class
function removeHighlight(){
  var table_html =  $(config['tableId']).html();
  var preIndex = table_html.indexOf(hightlighter_prefix)+24;
  var postIndex = preIndex + table_html.substring(preIndex).indexOf(hightlighter_suffix);
  var prev_search = table_html.substring(preIndex, postIndex);
  var regExp = new RegExp('('+hightlighter_prefix+')'+prev_search+'('+hightlighter_suffix+')', 'ig');
  $(config['tableId']).html($(config['tableId']).html().replace(regExp,function(match){
    return match.replace(hightlighter_prefix, '').replace(hightlighter_suffix, '');
  }));
}

// Characters that match up with search enclose them with highlight class
function hightlight(search_value){
  removeHighlight(config['tableId']);
  // highlight new query
  if(search_value.length > 0){
    var search_regexp = new RegExp(search_value, 'ig');
    var cells = config['columnClass'].length == 1 ? $(config['tableId'] + " td") : $(config['columnClass']);
    for(var i=0;i<cells.length;i++)
    {
      cells[i].innerHTML = cells[i].innerHTML.replace(search_regexp, function(match){
        return hightlighter_prefix + match + hightlighter_suffix;
      });
    }
  }
}

// Things to be done after search success or not. Here, showing 'Not Found' message
function afterSearch(found, search_value = ''){
  if(found){
    $(config['notFoundDiv']).hide();
    hightlight(search_value, config['tableId']);
  }
  else{
    $(config['notFoundDiv']).show();
    if(moreResults())
      $(config['notFoundDiv']).text("Sorry, keyword you searched not found, try alternate synonym!");
    else
      $(config['notFoundDiv']).text("Couldn't find. Try 'More Results' near the search bar.");
  }
  if(!moreResults())
    $(config['lessImportantRows']).hide();
}
