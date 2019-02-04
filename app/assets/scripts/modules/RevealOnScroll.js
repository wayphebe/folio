import $ from jQuery;
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
 
class RevealOnScroll{
    constructor(){
        this.itemsToReveal = $(".scroller");
        this.hideInitially();
        // this.createWaypoints();
    }

    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }

    // createWaypoints(){
    //     this.itemsToReveal.each(function(){
    //         alert("testign");
    //     });
    }
}
export default RevealOnScroll;