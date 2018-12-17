$.fn.extend({
  sidebarMenu : function () {
    var menu = this;
    var animationSpeed = 300;
    $(menu).on('click', 'li a', function (e) {
      var $this = $(this);
      var checkElement = $this.next();
      if(checkElement.length){
        if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
          checkElement.slideUp(animationSpeed, function () {
            checkElement.removeClass('menu-open');
          });
          checkElement.parent("li").removeClass("active");
        }
        else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
          var parent = $this.parents('ul').first();
          var ul = parent.find('ul:visible').slideUp(animationSpeed);
          ul.removeClass('menu-open');
          var parent_li = $this.parent("li");
          checkElement.slideDown(animationSpeed, function () {
            checkElement.addClass('menu-open');
          });
            parent_li.addClass('active').siblings('li').removeClass('active');
        }
      if (checkElement.is('.treeview-menu')) {
          e.preventDefault();
        }
      } else {
        var $li = $this.parent('li');
        var $ul = $li.parent('ul');

        if($ul.is('.sidebar-menu')){
          $ul.find('ul:visible').slideUp(animationSpeed,function () {
            $(this).removeClass('menu-open');
          });
          $ul.find('.active').removeClass('active');
          $li.addClass('active');
        }else {
          $li.addClass('active').siblings().removeClass('active');
          $ul.parent('li').siblings().find('.active').removeClass('active');
        }
      }
    });
  }
})
