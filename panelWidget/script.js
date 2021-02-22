$(function(){
    $('.tab-panels .tabs li').on(`click`, function(){
        let $panel = $(this).closest(`.tab-panels`);

        $panel.find(`.tabs li.active`).removeClass(`active`);
        $(this).addClass(`active`);

        //find panel that we want to show
        let panelToShow = $(this).attr('rel');

        //hide current one
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        //show next pannel function, callback functions can not take paramaters
        function showNextPanel(){
            $(this).removeClass('active');

            $(`#${panelToShow}`).slideDown(300, function(){
                $(this).addClass(`active`);
            }
            );
        };
    });
});