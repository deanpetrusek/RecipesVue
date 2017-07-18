new Vue({
    el: '#app',
    template: '<div class="container"><img v-bind:style="imageStyle" src="Images/spoon-and-bowl.svg" width="275" height="275"><div class="card"><input id="recipeSearchBox" v-bind:placeholder="message" v-bind:style="inputStyle" type="text"><i v-bind:style="materialIconsStyle" class="material-icons">search</i></div></div>',
    data:{
        message: 'Search for recipes',
        materialIconsStyle: {
            position: 'absolute',
            top: '10px',
            right: '10px'
        },
        imageStyle: {
            'margin-right': 'auto',
            'margin-left': 'auto',
            display: 'block',
            'margin-bottom': '25px'
        },
        inputStyle: {
            'border-bottom': 'none',
            'margin-bottom': '0px',
            'padding': '0px 20px 0px 20px',
            '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            'box-sizing': 'border-box'
        }
    }    
})