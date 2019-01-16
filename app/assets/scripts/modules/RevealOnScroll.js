import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
 
class RevealOnScroll{
    constructor(){
        this.itemsToReveal = $(".projects");
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints(){
        this.itemsToReveal.each(function(){
            alert("testign");
        });
    }
}
export default RevealOnScroll;