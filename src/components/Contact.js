import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

class Contact extends Component {

    state = {
    };

    componentDidMount() {
        $(document).unbind();
        setTimeout(() => {
            $("#content")[0].scrollTop = 0;
        }, 100);
    }

    inputFocus(e) {
        $(e.currentTarget.parentElement.children[0]).addClass("active");
    }

    isEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    verifyForm() {
        let fullname, email, message;
        fullname = $("input[name='name']").val();
        email = $("input[name='email']").val();
        message = $("textarea[name='message']").val();
        if (fullname !== '' && email !== '' && this.isEmail(email) && message !== '') {
            this.sendMail(fullname, email, message);
        } else {
            $(".send-btn").addClass("invalid");
            $(".send-btn").html("Please complete the form.");
            setTimeout(function() {
                $(".send-btn").removeClass("invalid");
                $(".send-btn").html("Send");
            }, 3000);
        }
    }

    sendMail(fullname, email, message) {
        let data = JSON.stringify({
            fullname: fullname,
            email: email,
            message: message
        });
        console.log(data);
        $.ajax({
            type: 'POST',
            url: 'http://codeyourfreedom.com/noalea/php/contact.php',
            data: data
        })
        .done(function(data) {
            let d = JSON.parse(data);
            if (d === 'Form submitted successfully!') {
                $(".contact input, .contact textarea").val("");
                $(".contact .input-container p").removeClass("active");
                $(".send-btn").addClass("sent");
                $(".send-btn").html("Message sent!");
                setTimeout(function() {
                    $(".send-btn").removeClass("sent");
                    $(".send-btn").html("Send");
                }, 3000);
            }
        })
        .fail(function(err) {
            console.log(err);
        });


    }

    render() {

        return (
            <div className="contact">
                <div className="container">
                    <h1>Let's Get Started</h1>
                    <p>You can use the form below to contact me, or email me at <a href={'mailto:hello@noalea.work'}>hello@noalea.work</a> or just DM me on my socials located at the home page.</p>
                    <div className="input-container">
                        <p>Name</p>
                        <input type="text" autoComplete={'off'} name={'name'} onFocus={(e) => this.inputFocus(e)} />
                    </div>
                    <div className="input-container">
                        <p>Email</p>
                        <input type="email" autoComplete={'off'} name={'email'} onFocus={(e) => this.inputFocus(e)} />
                    </div>
                    <div className="input-container">
                        <p>Message</p>
                        <textarea name={'message'} autoComplete={'off'} onFocus={(e) => this.inputFocus(e)} />
                    </div>
                    <button name={'send'} className={'send-btn'} onClick={() => this.verifyForm(this)}>Send</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Contact);