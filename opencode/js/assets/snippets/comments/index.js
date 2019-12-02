


var button = $('#bt-submit-comments');

if(button) {
    var buttonAction = $(`<button class="comments__button" type="button">Avaliar</button>`);
    button.after(buttonAction);

    buttonAction.click(() => {
        button.trigger('click');
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvc25pcHBldHMvY29tbWVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxudmFyIGJ1dHRvbiA9ICQoJyNidC1zdWJtaXQtY29tbWVudHMnKTtcblxuaWYoYnV0dG9uKSB7XG4gICAgdmFyIGJ1dHRvbkFjdGlvbiA9ICQoYDxidXR0b24gY2xhc3M9XCJjb21tZW50c19fYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPkF2YWxpYXI8L2J1dHRvbj5gKTtcbiAgICBidXR0b24uYWZ0ZXIoYnV0dG9uQWN0aW9uKTtcblxuICAgIGJ1dHRvbkFjdGlvbi5jbGljaygoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvc25pcHBldHMvY29tbWVudHMvaW5kZXguanMifQ==
