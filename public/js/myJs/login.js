$("#modalForm").validate({
    rules: {
        nameModal: {
            required: true,
            minlength: 8
        },
        emailModal: {
            required: true,
            minlength: 5
        },
        numberModal: {
            required: true,
            minlength: 12
        },
    },
    messages: {
        nameModal: {
            required: "Please enter name",
            minlength: "Your data must be at least 8 characters"
        },
        emailModal: {
            required: "Please enter email",
            minlength: "Your data must be at least 5 characters"
        },
        numberModal: {
            required: "Please enter number",
            minlength: "Number should be atleast 9 character"
        },
    }
});
$("#createButton").click(function(e){
    if(!$('#modalForm').valid()){
        e.preventDefault()
    }
})





  