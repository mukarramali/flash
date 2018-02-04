var search_input_id = '#search_commands';
var row_class = 'commands_row';
var column_class = 'commands_cell';
var table_id = '#commands_table';
var show_more_button_suffix = 'show_more_button_';

function moreResultsEnabled(){
  return $('#extend_search_icon').hasClass('fa-chevron-down');
}

function titleize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Things to be done after search success or not. Here, showing 'Not Found' message
function searchResult(found){
  var msgDiv = '#command_not_found';
  if(found)
    $(msgDiv).hide();
  else{
    $(msgDiv).show();
    if(moreResultsEnabled())
      $(msgDiv).text("Sorry, keyword you searched not found, try alternate synonym!");
    else
      $(msgDiv).text("Couldn't find. Try 'More Results' near the search bar.");
  }
}

// on more result, toggle the less important rows
$(document).on('click', '#extend_search', function(){
  console.log("extend_search clicked");
  if($('#extend_search_icon').hasClass('fa-chevron-up'))
  {
    $('.less_important').show();
    $('#extend_search_icon').removeClass('fa-chevron-up');
    $('#extend_search_icon').addClass('fa-chevron-down');
    $('#extend_search_text').text('Less Results  ');
  }else{
    $('.less_important').hide();
    $('#extend_search_icon').removeClass('fa-chevron-down');
    $('#extend_search_icon').addClass('fa-chevron-up');
    $('#extend_search_text').text('More Results  ');
  }
  // Refresh the search result again with more results
  var e = $.Event("keyup");
  $('#search_commands').trigger(e);
});

var hightlighter_prefix = "<span class=\"highlight\">";
var hightlighter_suffix = '</span>';

// Undo previous highlight, removing highlight class
function removeHighlight(table_id){
  var table_html =  $(table_id).html();
  var preIndex = table_html.indexOf(hightlighter_prefix)+24;
  var postIndex = preIndex + table_html.substring(preIndex).indexOf(hightlighter_suffix);
  var prev_search = table_html.substring(preIndex, postIndex);
  var regExp = new RegExp('('+hightlighter_prefix+')'+prev_search+'('+hightlighter_suffix+')', 'ig');
  $(table_id).html($(table_id).html().replace(regExp,function(match){
    return match.replace(hightlighter_prefix, '').replace(hightlighter_suffix, '');
  }));
}

// Characters that match up with search enclose them with highlight class
function hightlight(search_value, table_id){
  removeHighlight(table_id);
  // highlight new query
  if(search_value.length > 0){
    var search_regexp = new RegExp(search_value, 'ig');
    var cells = document.getElementsByClassName(column_class);
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

  $('.less_important').hide();

  // When something is entered in search box
  $(search_input_id).keyup(function(){
    var search_value = $(this).val();
    var rows = document.getElementsByClassName(row_class);
    var found = false;

    if(search_value.length > 0)
      for(var i=0;i<rows.length;i++)
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
    else{
      removeHighlight(table_id);
      $('.'+row_class).show();
      if(!moreResultsEnabled())
        $('.less_important').hide();
    }
    // If we found even a single search success, call highlight
    if(found){
      hightlight(search_value, table_id);
    }
    searchResult(found);
  });
  //keyup function end
});