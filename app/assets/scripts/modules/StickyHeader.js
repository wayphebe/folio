import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader{
    constructor(){
        this.header = $(".header");
        this.headerTriggerElement = $(".large-hero__title");
        this.createHeaderWaypoint();
    }

    createHeaderWaypoint(){
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction){
                if(direction == "down"){
                    that.header.addClass("header--dark");
                } else {
                    that.header.removeClass("header--dark");
                }
            }
        });
    }
}

export default StickyHeader; 