var functions = (function ($) {
   var API_ENDPOINT ="https://comment-on-everything.herokuapp.com"
    var data = {
        user: {
            username: 'Dekel Ben-David',
            userId: '4343434343',
            imgUrl:
                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
            postsCount: 10,
            followingCount: 32,
            FollowersCount: 54,
            notifications: [
                {subject: 'warning', message: 'bla bla blat lbfffdsf', time: 12},
                {subject: 'new feature', message: 'bla bla blat lbfffdsf', time: 4},
                {subject: 'new post', message: 'bla bla blat lbfffdsf', time: 3},
                {subject: 'new comments', message: 'bla bla blat lbfffdsf', time: 2},
            ],
        },
        hashtags: [
            {title: 'Food', id: '4e4ereee', reviews: 23},
            {title: 'Electronics', id: '4e4ereee', reviews: 46},
            {title: 'Clothes', id: '4e4ereee', reviews: 34},
            {title: 'Cars', id: '4e4ereee', reviews: 566},
            {title: 'Articles', id: '4e4ereee', reviews: 343},
            {title: 'Smart Phones', id: '4e4ereee', reviews: 22},
        ],
        posts: [
            {
                user: {
                    username: 'Ofer Elfassi',
                    userId: '101918191',
                    imgUrl:
                        'https://media-exp1.licdn.com/dms/image/C5603AQFS0xBe4f7GBA/profile-displayphoto-shrink_200_200/0/1525345519316?e=1645660800&v=beta&t=GZsv5X6-tVOO3GFCGP5k9w63iVcOOhHfk323c4HThn4',
                },
                id: 'sdsd324234',
                hashtag: 'food',
                imgUrl:
                    'https://www.telma-cereals.co.il/wp-content/uploads/2020/03/alufim_badaz-380x607.png',
                likes: 40,
                comments: [
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                ],
            },
            {
                user: {
                    username: 'Ofer Elfassi',
                    userId: '101918191',
                    imgUrl:
                        'https://media-exp1.licdn.com/dms/image/C5603AQFS0xBe4f7GBA/profile-displayphoto-shrink_200_200/0/1525345519316?e=1645660800&v=beta&t=GZsv5X6-tVOO3GFCGP5k9w63iVcOOhHfk323c4HThn4',
                },
                id: 'sdsd34fds4234',
                hashtag: 'food',
                imgUrl:
                    'https://d3m9l0v76dty0.cloudfront.net/system/photos/5672653/original/cf18f302f17f968490f0652274586ee1.jpg',
                likes: 40,
                comments: [
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                    {
                        user: {
                            username: 'Dekel Ben-David',
                            userId: '4343434343',
                            imgUrl:
                                'https://media-exp1.licdn.com/dms/image/C5603AQHB4WCgqsoNlw/profile-displayphoto-shrink_800_800/0/1627570136574?e=1645660800&v=beta&t=jqnMMeFxpJfwobThi3JBcgArCXQaEVjfgKU0-m-kQrA',
                        },
                        content: 'sddss sd sd  fgffg  fgfg  dsssssss fdfffffff',
                        likes: 20,
                    },
                ],
            },
        ],
    };




    class serverApi {

        static #authHeader(token = "") {
            return {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            }
        }

        static #getResponse(request, success, fail) {
            request.done(function (response) {
                console.log(response);
                success(response);
            });
            request.fail(function (jqXHR) {
                console.log(jqXHR.responseJSON);
                fail(jqXHR.responseJSON, jqXHR.status);
            });
        }

        static post({url, postData, token, success, fail}) {
            var request = $.ajax({
                type: 'post',
                data: postData,
                cache: false,
                url: url,
                ...serverApi.#authHeader(token)
            });
            this.#getResponse(request, success, fail)
        }

        static delete({url, token, success, fail}) {
            var request = $.ajax({
                type: 'DELETE',
                cache: false,
                url: url,
                ...serverApi.#authHeader(token)
            });
            this.#getResponse(request, success, fail)
        }

        static get({url, token, success, fail}) {
            var request = $.ajax({
                type: 'GET',
                cache: false,
                url: url,
                ...serverApi.#authHeader(token)
            });
            this.#getResponse(request, success, fail)
        }
    };

    /********************************************************************************************************************** */

    /** Class DarkMode handle dark mode toggling and saving in local storage. */
    class DarkMode {
        /**
         * Initialize DOM elements references.
         */

        constructor() {
            this.documentElement = $(document.documentElement);
            this.darkModeBtn = $('#night-mode');
        }

        init = () => {
            if (!('localStorage' in window)) return;
            var nightMode = localStorage.getItem('gmtNightMode');
            if (nightMode) {
                this.documentElement.addClass('dark');
            } else {
                $('.header_outer img').css({display: 'block'});
                $('.header_outer img.logo_inverse').css({display: 'none'});
            }

            this.darkModeBtn.on('click', this.toggleDarkMode);
        };

        /**
         * toggle Dark Mode
         */
        toggleDarkMode = e => {
            e.preventDefault();
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('gmtNightMode', true);
                return;
            }
            localStorage.removeItem('gmtNightMode');
        };
    }

    /********************************************************************************************************************** */

    /** Class Loader creates spinning loader element. */
    class Loader {
        /**
         * Initialize DOM elements references.
         */

        constructor() {
            const body = $('body');
            body.append('<div id="modal-overlay"></div>');
            body.append('<div id="loader" uk-spinner="ratio: 3"></div>');
            this.loader = $('#loader');
            this.overlay = $('#modal-overlay');
        }

        /**
         * Show loader.
         */
        startLoader = () => {
            this.loader.css({display: 'block'});
            this.overlay.css({display: 'block'});
        };

        /**
         * Hide loader.
         */
        stopLoader = () => {
            this.loader.css({display: 'none'});
            this.overlay.css({display: 'none'});
        };
    }

    /********************************************************************************************************************** */

    /**
     * Convert form data to key value pairs.
     * @param {object} form - jquery form element object.
     */
    function parseForm(form) {
        return $(form)
            .serializeArray()
            .reduce(function (obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});
    }

    /********************************************************************************************************************** */

    /** class MessageModal Handling popup messages. */
    class MessageModal {
        /**
         * Initialize DOM elements references.
         */
        constructor() {
            var modalElement = $(`  <div id="modal-sections" uk-modal>
    <div id="modal-border" class="uk-modal-dialog border-solid border-2 ">
<!--    <div class="uk-modal-dialog border-solid border-2 border-red-600">-->
      <button id="modal-x-btn" class="uk-modal-close-default" type="button" uk-close></button>
      <div id="modal-header" class="uk-modal-header">
        <h2 id="modal-title-h2" class="uk-modal-title">Modal Title</h2>
      </div>
      <div class="uk-modal-body">
        <p id="modal-content-p"></p>
      </div>
      <div id="message-modal-footer" class="uk-modal-footer uk-text-right">
        <button id="modal-cancel-btn" class=" uk-button justify-self-center uk-button-danger " type="button">Cancel</button>
        <button id="modal-ok-btn" class=" uk-button uk-button-primary" type="button">Save</button>
      </div>
    </div>
  </div>`);
            $('body').append(modalElement);
            this.modalElements = {
                modal: modalElement,
                okBtn: $('#modal-ok-btn'),
                cancelBtn: $('#modal-cancel-btn'),
                exitBtn: $('#modal-x-btn'),
                modalTitle: $('#modal-title-h2'),
                modalContent: $('#modal-content-p'),
                modalBorder: $('#modal-border'),
                modalFooter: $('#message-modal-footer'),
            };
            this.colors = {
                success: 'border-green-600',
                warning: 'border-yellow-300',
                alert: 'border-red-600',
            };
        }


        linkMessageModal = (title, message, color, onEnd = null) => {
            this.showMessageModal({
                title: title,
                text: message,
                color: color,
                timeout: 1500,
                onTimeout: () => {
                    if (onEnd) {
                        onEnd()
                    }
                },
                showExitBtn: true,
                onExit: () => {
                    if (onEnd) {
                        onEnd()
                    }
                },
            })
        }

        quickMessage = (title, message, color, onEnd = null) => {
            this.showMessageModal({
                title: title,
                text: message,
                color: color,
                timeout: 4000,
                onTimeout: () => {
                    if (onEnd) {
                        onEnd()
                    }
                },
                showExitBtn: true,
                onExit: () => {
                    if (onEnd) {
                        onEnd()
                    }
                },
            })
        }


        /**
         modalData definition
         @typedef {Object} modalData
         @property {string} title .
         @property {string} text .
         @property {string} color .
         @property {function} [onExit] .
         @property {function} [onOk] .
         @property {function} [onCancel] .
         @property {string} [okText] .
         @property {string} [cancelText] .
         @property {boolean} [showExitBtn] .
         @property {number} [timeout] .
         @property {function} [onTimeout] .
         */
        /**
         * Open message modal
         @param {modalData} modalData .
         */
        showMessageModal = modalData => {
            const {
                title,
                text,
                color,
                onExit = null,
                onOk = null,
                onCancel = null,
                okText = 'ok',
                cancelText = 'cancel',
                showExitBtn = true,
                timeout = 0,
                onTimeout = null,
            } = modalData;
            let {
                modal,
                okBtn,
                cancelBtn,
                exitBtn,
                modalTitle,
                modalContent,
                modalBorder,
                modalFooter,
            } = this.modalElements;

            modalBorder.addClass(this.colors[color]);
            modalTitle.html(title);
            modalContent.html(text);
            okBtn.html(okText);

            okBtn.css({display: onOk ? 'inline-block' : 'none'});
            okBtn.on('click', onOk);

            cancelBtn.html(cancelText);
            cancelBtn.css({display: onCancel ? 'inline-block' : 'none'});
            cancelBtn.on('click', onCancel);

            exitBtn.css({display: showExitBtn ? 'block' : 'none'});
            exitBtn.on('click', onCancel);

            modalFooter.css({display: !onOk && !onCancel ? 'none' : 'block'});

            UIkit.modal(modal).show();

            if (onCancel) {
                cancelBtn.on('click', () => {
                    onCancel();
                    this.closeMessageModal();
                });
            }
            if (onExit) {
                exitBtn.on('click', () => {
                    onExit();
                    closeMessageModal();
                });
            } else {
                exitBtn.on('click', () => this.closeMessageModal());
            }
            if (timeout > 0) {
                setTimeout(() => {
                    onTimeout && onTimeout();
                    this.closeMessageModal();
                }, timeout);
            }
        };

        /**
         * Close message modal and remove event listeners
         */
        closeMessageModal = () => {
            const {modal, modalBorder, overlay, okBtn, color, cancelBtn, exitBtn} =
                this.modalElements;
            modalBorder.removeClass(this.colors[color]);
            UIkit.modal(modal).hide();
        };


    }

    /********************************************************************************************************************** */

    class ReviewController {
        constructor(imageKey, loader, imageUrl, messageModal) {
            this.newReviewModal = null;
            this.newReviewform = null;
            this.newReviewCancelBtn = null;
            this.newReviewImage = null;
            this.userToken = getUserToken()
            this.imageKey = imageKey
            this.loader = loader
            this.imageUrl = imageUrl
            this.messageModal = messageModal
        }

        init() {
            this.initAddReviewModal();
            this.newReviewModal = $('#new-review-modal');
            this.newReviewform = $('#new-review-form');
            this.newReviewCancelBtn = $('#new-review-cancel');
            this.newReviewImage = $('#review-modal-image')
        }

        onCancel = () => {
            var imageKey = this.imageKey
            serverApi.delete({
                url: `${API_ENDPOINT}/api/posts/post-pic/${imageKey}`,
                token: this.userToken,
                success: () => this.closeModal(),
                fail: () => this.closeModal()
            })
        };

        onSubmit = (e) => {
            e.preventDefault()
            serverApi.post({
                url: `${API_ENDPOINT}/api/posts`,
                postData: {
                    ...parseForm(this.newReviewform), imageUrl: this.imageUrl, imageKey: this.imageKey
                },
                token: this.userToken,
                success: (response) => {
                    console.log("res",response)


                    this.handleSubmitSuccess()
                },
                fail: () => this.handleSubmitFail()
            })
        };

        handleSubmitSuccess = () => {
            this.closeModal()
            this.messageModal.showMessageModal({
                title: 'Success',
                text: "Added new review",
                color: 'success',
                showExitBtn: true,
                onExit: () => {
                    this.closeModal()
                },
            });
        }
        handleSubmitFail = () => {
            this.closeModal()
        }

        openModal = () => {
            UIkit.modal(this.newReviewModal).show();
            this.newReviewImage.attr('src', this.imageUrl)
            this.newReviewform.on('submit', this.onSubmit)
            this.newReviewCancelBtn.on('click', this.onCancel)
            console.log(this.imageUrl, this.imageKey)
        };
        closeModal = () => {
            UIkit.modal(this.newReviewModal).hide();
        };

        initAddReviewModal = () => {
            $('#wrapper').append(
                '<div id="new-review-modal" class="uk-modal-container" uk-modal>\n' +
                '            <div class="uk-modal-dialog story-modal">\n' +
                '                <button class="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white"\n' +
                '                        type="button" uk-close></button>\n' +
                '\n' +
                '                <div class="story-modal-media">\n' +
                '                    <img id="review-modal-image" src="assets/images/post/img4.jpg" alt="" class="inset-0 h-full w-full object-cover">\n' +
                '                </div>\n' +
                '                <div class="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100">\n' +
                '\n' +
                '                    <!-- post header-->\n' +
                '                    <div class="border-b flex items-center justify-between px-5 py-3 dark:border-gray-600">\n' +
                '                        <div class="flex flex-1 items-center space-x-4">\n' +
                '                            <span class="block text-lg font-semibold"> Cant find match for you photo</span>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="story-content p-4  " data-simplebar>\n' +
                "                        <p> Let's upload a post and share the review with everyone! </p>\n" +
                '                        <form id="new-review-form" class="flex flex-col justify-around">\n' +
                '                            <label for="hashtag-drop">choose hashtag that match your photo subject</label>\n' +
                '\n' +
                '                            <select required name="hashtagName" id="hashtag-drop" class="uk-select ">\n' +
                '                                <option>Electronics</option>\n' +
                '                                <option>Food</option>\n' +
                '                                <option>Cars</option>\n' +
                '                                <option>Vacation</option>\n' +
                '                                <option>Sport</option>\n' +
                '                                <option>Fun</option>\n' +
                '                                <option>Politics</option>\n' +
                '                                <option>Other</option>\n' +
                '                            </select>\n' +
                '                            <label for="review-input">write your review here</label>\n' +
                '                            <textarea required name="description" id="review-input" class="uk-textarea mb-8"></textarea>\n' +
                '\n' +
                '\n' +
                '                            <div class="flex justify-around">\n' +
                '                                <button id="new-review-cancel" class="uk-button uk-button-danger">Cancel</button>\n' +
                '                                <button id="new-review-subbmit" class="uk-button uk-button-primary" type="submit">Post</button>\n' +
                '                            </div>\n' +
                '                        </form>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '\n' +
                '            </div>\n' +
                '        </div>',
            );
        };
    }

    /********************************************************************************************************************** */

    /**
     objects
     @typedef {Object} objects
     @property {MessageModal} [msgModal] .
     @property {Loader} [loader] .
     */
    /** Class Auth Handle user authentication - signup and login functionality. */
    class Auth {
        /**
         * Initialize DOM elements references.
         * @param {objects} objects - object containing MessageModal instance.
         */
        constructor(objects) {
            this.msgModal = objects.msgModal;
            this.loader = objects.loader;
            this.elements = {
                loginForm: $('#login-form'),
                signupForm: $('#signup-form'),
            };
        }

        /**
         * Initialize page event listeners, and form validations.
         */
        initLoginValidate() {
            this.#initFormValidation();
            this.#loginValidate();
        }

        /**
         * Initialize page event listeners, and form validations.
         */
        initSignupValidate() {
            this.#initFormValidation();
            this.#signupValidate();
        }

        /**
         * Create custom form validators.
         */
        #initFormValidation() {
            $.validator.addMethod(
                'checkPassword',
                function (value, element, param) {
                    return this.optional(element) || value === $(param).val();
                },
                'passwords dont match',
            );

            $.validator.addMethod(
                'pattern',
                function (value, element, param) {
                    if (this.optional(element)) {
                        return true;
                    }
                    if (typeof param === 'string') {
                        param = new RegExp('^(?:' + param + ')$');
                    }
                    return param.test(value);
                },
                'Invalid format.',
            );
        }

        /**
         * Login form validation settings.
         */
        #loginValidate() {
            var that = this;
            this.elements.loginForm.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                        required: true,
                    },
                },
                messages: {
                    email: {
                        pattern: 'Must be valid email',
                        required: 'Please provide email',
                    },
                    password: {
                        pattern:
                            '7 to 15 characters which contain at least one numeric digit and a special character',
                        required: 'Please provide a password',
                    },
                },

                submitHandler: form => {
                    that.#loginHandler(parseForm(form));
                },
            });
        }

        /**
         * Signup form validation settings.
         */
        #signupValidate() {
            var that = this;
            this.elements.signupForm.validate({
                rules: {
                    firstname: {
                        pattern: /^(?!.{52,})[a-zA-Z.'-]{2,50}/,
                        required: true,
                    },
                    lastname: {
                        pattern: /^(?!.{52,})[a-zA-Z.'-]{2,50}/,
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                        required: true,
                    },
                    confirmpassword: {
                        checkPassword: '#password',
                        required: true,
                    },
                },
                messages: {
                    firstname: {
                        pattern: 'Required at least two letters',
                        required: 'Please provide firstname',
                    },
                    lastname: {
                        pattern: 'Required at least two letters',
                        required: 'Please provide firstname',
                    },
                    email: {
                        pattern: 'Must be valid email',
                        required: 'Please provide email',
                    },
                    password: {
                        pattern:
                            '7 to 15 characters which contain at least one numeric digit and a special character',
                        required: 'Please provide a password',
                    },
                    confirmpassword: {
                        checkPassword: 'passwords dont match',
                        required: 'Please provide a password confirmation',
                    },
                },

                submitHandler: form => {
                    that.#signupHandler(parseForm(form));
                },
            });
        }

        /**
         * Toggle login/signup form handler.
         */
        #toggleSignupLogin = () => {
            if ($('#login-page').length) {
                window.location.href = 'register.html';
            } else {
                window.location.href = 'login.html';
            }
        };

        /**
         authData
         @typedef {Object} authData
         @property {string} username
         @property {string} password
         @property {string} [fullname]
         @property {string} [nickname]
         @property {string} [username]
         @property {string} [confirmpassword]
         */

        /**
         * Handle login form submission.
         * @param {authData} data - login form data.
         */
        #loginHandler = data => {
            var that = this;
            console.log('login data ', data);
            this.loader.startLoader();
            serverApi.post({
                url: `${API_ENDPOINT}/api/auth/login`,
                postData: data,
                token: '',
                success: response => {
                    that.loader.stopLoader();
                    that.#loginSuccessHandler(response);
                },
                fail: (response, status) => {
                    that.loader.stopLoader();
                    that.#loginFailedHandler(response, status);
                },
            });

        };
        /**
         * Handle signup form submission.
         * @param {authData} data - signup form data.
         */
        #signupHandler = data => {
            var that = this;
            console.log(data);
            this.loader.startLoader();
            serverApi.post({
                url: `${API_ENDPOINT}/api/auth/signup`,
                postData: data,
                token: '',
                success: response => {
                    that.loader.stopLoader();
                    that.#signupSuccessHandler(response);
                },
                fail: (response, status) => {
                    that.loader.stopLoader();
                    console.log({response, status});
                    that.#signupFailedHandler(response, status);
                },
            });
        };

        #loginSuccessHandler = response => {
            this.msgModal.showMessageModal({
                title: 'Login Success',
                text: "you'll be redirected to homepage",
                color: 'success',
                timeout: 1500,
                onTimeout: () => {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('token', response.data.token);
                    window.location.href = 'feed.html';
                },
                showExitBtn: false,
                onExit: () => {
                    $('#username').val('');
                },
            });
        };
        #loginFailedHandler = response => {
            this.msgModal.showMessageModal({
                title: 'Login Error',
                text: response.message,
                color: 'warning',
                onExit: () => {
                    $('#username').val('');
                },
            });
        };
        #signupSuccessHandler = response => {
            this.loader.stopLoader();
            this.msgModal.showMessageModal({
                title: 'Signup Success',
                text: "you'll be redirected to login",
                color: 'success',
                okText: 'Go to Login',
                onOk: this.#toggleSignupLogin,
                showExitBtn: false,
                onExit: () => {
                    $('#username').val('');
                },
            });
        };
        #signupFailedHandler = response => {
            this.loader.stopLoader();
            this.msgModal.showMessageModal({
                title: 'Signup Error',
                text: response.message,
                color: 'alert',
            });
        };
    }

    function setLogOutHandler(msgModal) {
        $('#logout-btn').on('click', () => handleLogout(msgModal));
    }

    function handleLogout(msgModal) {
        msgModal.showMessageModal({
            title: 'Logout',
            text: 'Are you sure you want to logout?',
            color: 'warning',
            okText: 'Yes',
            cancelText: 'No',
            onOk: () => {
                localStorage.removeItem('user');
                window.location.href = 'login.html';
            },
            showExitBtn: true,
            onExit: () => {
            },
            onCancel: () => {
            },
        });
    }

    function isLoggedIn() {
        return localStorage.getItem('user');
    }

    function getHashTags() {
        return data.hashtags;
    }

    function getUserData() {
        return JSON.parse(localStorage.getItem('user'));
    }

    function getUserToken() {
        return localStorage.getItem('token');
    }

    /**
     *get all users posts
     *  @param {MessageModal} msgModal
     * @param {Function} result
     */
    function getPosts(msgModal,result) {
        serverApi.get({
            url: `${API_ENDPOINT}/api/posts`,
            token: "",
            success: (response) => {
                result(response.data)
            },
            fail: (response, status) => {
                msgModal.quickMessage("Failed", response.message || "server Error")
            }
        })
    }

    class BaseInitialization {
        constructor() {
            this.modal = new MessageModal();
            new DarkMode().init();
            this.loader = new Loader();
            this.user = getUserData();
            console.log(this.user);
            if (this.user) {
                setLogOutHandler(this.modal);
            }
        }
    }

    class PageInitialization {
        constructor(user, loader, messageModal) {
            this.loader = loader;
            this.user = user;
            this.messageModal = messageModal;
            this.profileLink = $('#profile-or-login-link');
            this.mainProfilePic = $('#main-profile-pic');
            this.notificationList = $('#notification-list');
        }

        init() {
            if (this.user) {
                this.loadLoggedInUser(this.user);
            } else {
                this.loadUnregisteredUser();
            }
        }

        loadLoggedInUser = user => {
            this.mainProfilePic.attr('src', user.image.url);
            this.profileLink.attr('href', 'profile.html');
            this.profileLink.text(`${user.firstname} ${user.lastname}`);
            this.profileLink.removeClass('uk-button uk-button-text');
            this.profileLink.addClass(
                'text-xl font-medium capitalize mt-4 uk-link-reset',
            );
            $('#posts-count').text(user.posts.length);
            $('#following-count').text(user.following.length);
            $('#followers-count').text(user.followers.length);
            $('#profile-stats').removeClass('uk-hidden');
            $('#profile-options').removeClass('uk-hidden');
            $('#log-in-btn').addClass('uk-hidden');
            $('#nav-options').removeClass('uk-hidden');

            user.notifications.forEach(notification => {
                this.notificationList.append(`<li>
                                <a href="#">
                                    <div class="drop_content">
                                        <p id="notification-message"> <strong id="notification-subject">${notification.subject}</strong>  ${notification.message}</p>
                                        <span id="notification-time-ago" class="time-ago"> ${notification.time} hours ago </span>
                                    </div>
                                </a>
                            </li>`);
            });
            this.initUploadHandler();
        };
        loadUnregisteredUser = () => {
            this.mainProfilePic.attr(
                'src',
                'assets/images/avatars/profile-avatar.png',
            );
            // $("#profile-or-login-text").attr("href", "register.html");
            // $("#profile-or-login-text").text(`JOIN C.O.E`);
            this.profileLink.attr('href', 'register.html');
            this.profileLink.text('JOIN C.O.E');
            this.profileLink.removeClass(
                'text-xl font-medium capitalize mt-4 uk-link-reset',
            );
            this.profileLink.addClass('uk-button uk-button-text');
            $('#profile-stats').addClass('uk-hidden');
            $('#profile-options').addClass('uk-hidden');
            $('#log-in-btn').removeClass('uk-hidden');
            $('#nav-options').addClass('uk-hidden');
        };

        initUploadHandler = () => {
            var that = this;
            UIkit.upload('#post-image-upload', {
                url: `${API_ENDPOINT}/api/posts/post-pic`,
                name: 'post-image',

                beforeSend: environment => {
                    console.log(environment.data);
                    const token = getUserToken();
                    // environment.headers.Authorization = `Bearer ${token}`;
                    environment.headers = {
                        Authorization: `Bearer ${token}`,
                    };

                    // environment.headers['Content-Type'] = "multipart/form-data";
                    that.loader.startLoader();
                    console.log('beforeSend');
                },

                error: function (e) {
                    console.log('error', e);
                    that.loader.stopLoader();
                },

                complete: function (data) {
                    that.loader.stopLoader();
                    console.log('complete', JSON.parse(data.response));
                    var respone = JSON.parse(data.response)

                    if (respone.data.matches.length === 0) {
                        const reviewModal = new ReviewController(respone.data.imageKey, that.loader, respone.data.imageUrl, that.messageModal)
                        reviewModal.init()
                        reviewModal.openModal()
                    }else {
                        that.messageModal.quickMessage("success","We found post that match your post","success")
                    }
                },
            });
        };
    }

    class LoginPage extends BaseInitialization {
        constructor() {
            super();
            this.Auth = new Auth({msgModal: this.modal, loader: this.loader});
        }

        init() {
            this.Auth.initLoginValidate();
            this.loader.stopLoader();
        }
    }

    class SignupPage extends BaseInitialization {
        constructor() {
            super();
            this.Auth = new Auth({msgModal: this.modal, loader: this.loader});
        }

        init() {
            this.Auth.initSignupValidate();
            this.loader.stopLoader();
        }
    }

    class ProfilePage extends BaseInitialization {
        constructor() {
            super();
            this.pageStructure = new PageInitialization(this.user, this.loader, this.modal);
            this.profilePageImage = $('#profile-page-image');
            this.profilePageTitle = $('#profile-page-title');
            this.profileAboutText = $('#profile-about-text');
            this.profilePostCount = $('#profile-post-count');
            this.profileFollowersCount = $('#profile-followers-count');
            this.profileFollowingCount = $('#profile-following-count');
            this.profilePostsContainer = $('#profile-posts-container');
            this.profileImageUpload = $('#profile-image-upload');
        }

        init() {
            var user = this.user;
            this.pageStructure.init();
            this.loader.stopLoader();
            this.profilePageImage.attr('src', user.imgUrl);
            this.profilePageTitle.text(`${user.firstname} ${user.lastname}`);
            this.profileAboutText.text(`${user.firstname} ${user.lastname}`);
            this.profilePostCount.text(user.posts.length);
            this.profileFollowersCount.text(user.followers.length);
            this.profileFollowingCount.text(user.following.length);
            this.loadUserPosts();
            this.initProfileImageUpload();
            // this.profilePostsContainer
        }

        loadUserPosts() {
            this.user.posts.forEach(post => {
                this.profilePostsContainer.append(`
                     <a href="#story-modal" uk-toggle>
                        <img src="assets/images/avatars/avatar-lg-1.jpg" alt="" class="w-full lg:h-60 h-40 rounded-md object-cover">
                    </a>
       `);
            });
        }

        initProfileImageUpload = () => {
            const that = this;

            UIkit.upload('#profile-image-upload', {
                url: `${API_ENDPOINT}/api/users/profile-pic`,
                name: 'profilePic',

                beforeSend: environment => {
                    console.log(environment.data);
                    const token = getUserToken();
                    // environment.headers.Authorization = `Bearer ${token}`;
                    environment.headers = {
                        Authorization: `Bearer ${token}`,
                    };

                    // environment.headers['Content-Type'] = "multipart/form-data";
                    that.loader.startLoader();
                    console.log('beforeSend');
                },

                error: function (e) {
                    console.log('error', e);
                    that.loader.stopLoader();
                },

                complete: function (data) {
                    that.loader.stopLoader();

                    console.log('complete', data);
                },
            });
        };
    }

    class FeedPage extends BaseInitialization {
        constructor() {
            super();
            this.hashtagList = $('#hashtag-list');
            this.postsFeed = $('#posts-feed');
            this.pageStructure = new PageInitialization(this.user, this.loader, this.modal);
        }

        init() {
            this.pageStructure.init();
            this.loadHashTags();
            if (this.user) {
            } else {
                // this.loadUnregisteredUser();
            }
             this.loadPosts();
            setLogOutHandler(this.modal);
            this.loader.stopLoader();
        }

        loadHashTags = () => {
            var hashtags = getHashTags();
            hashtags.forEach(hashtag => {
                this.hashtagList
                    .append(`<div class="flex items-center justify-between py-3">
                                <div class="flex flex-1 items-center space-x-4">
                                    <div class="flex flex-col">
                                        <a href=""><span class="block capitalize font-semibold"> # ${hashtag.title} </span></a>
                                        <span class="block capitalize text-sm"> ${hashtag.reviews} Reviews </span>
                                    </div>
                                </div>
                            </div>`);
            });
        };

        loadPosts = () => {
            var isLoggedInUser = isLoggedIn();
            getPosts(this.modal,posts=>{
                console.log("postss",posts)
                // elements.Post.renderPosts(posts,isLoggedInUser,this.postsFeed)
                // this.postsFeed


            posts.forEach(post => {
                var newPost =
                    $(`<div id="${post._id}" class="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">

                        <!-- post header-->
                        <div class="flex justify-between items-center px-4 py-3">
                            <div class="flex flex-1 items-center space-x-4">
                                <a href="#">
                                    <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                        <img data-src="${
                        post.user.image.url
                    }" uk-img data-width data-height
                                             class="bg-gray-200 border border-white rounded-full w-8 h-8">
                                    </div>
                                </a>
                                <span class="block capitalize font-semibold dark:text-gray-100"> ${
                        post.user.firstname + " " +post.user.lastname
                    } </span>
                            </div>
                             <div class="${
                        isLoggedInUser
                            ? this.user._id === post.user._id
                                ? ''
                                : 'uk-hidden'
                            : 'uk-hidden'
                    }">
                                <a href="#"> <i class="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700"></i> </a>
                                <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">

                                    <ul class="space-y-1">
                                        <li>
                                            <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                <i class="uil-edit-alt mr-1"></i>  Edit Post
                                            </a>
                                        </li>

                                        <li>
                                            <hr class="-mx-2 my-2 dark:border-gray-800">
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                                <i class="uil-trash-alt mr-1"></i>  Delete
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div uk-lightbox ">
                            <a href="${post.image.url}">
                                <img  data-src="${
                        post.image.url
                    }" alt="" uk-img data-width data-height>
                            </a>
                        </div>



                        <div class="py-3 px-4 space-y-3">

                            <div class="uk-margin-small-left flex space-x-4 lg:font-bold">
                                <a href="#" class="flex items-center space-x-2">
                                    <i class="fas fa-thumbs-up"></i>
                                    <div> Like</div>
                                </a>
                                <a href="#comment-box-${
                        post._id
                    }" class="flex items-center space-x-2 " uk-scroll>
                                  
                                        <i class="fas fa-comment-dots"></i>
                                   
                                    <div > Comment</div>
                                </a>
                                <a href="#" class="flex items-center space-x-2 flex-1 justify-end">
                                    <i class="far fa-flag"></i>
                                    <div> Report</div>
                                </a>
                            </div>
                            <div class="flex items-center space-x-3 ">
                                <div class="flex items-center ">
                                    <img src="assets/images/avatars/avatar-1.jpg" alt=""
                                         class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900">
                                    <img src="assets/images/avatars/avatar-4.jpg" alt=""
                                         class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2">
                                    <img src="assets/images/avatars/avatar-2.jpg" alt=""
                                         class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2">
                                </div>
                                <div class="dark:text-gray-100" >
                                    ${post.reactions.length} Likes
                                </div>
                            </div>
                        <div>
                            
        <article class="user-review uk-comment uk-comment-primary uk-border-rounded uk-margin-small-bottom  ">
   
            <div class="uk-grid-medium uk-flex-middle" uk-grid>
                <div class="uk-width-expand">
                    <p class="ml-3 uk-margin-remove"><a class="uk-link-reset font-medium" href="#">${
                        post.user.firstname + " " +post.user.lastname
                    }</a></p>
                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                        <li><a href="#">${new Date(post.createdAt).toLocaleDateString()}</a></li>
                    </ul>
                </div>
            </div>
    
            <div class="uk-comment-body ">
                <p></p>
            </div>
    
        </article>
        
          <div class="flex justify-center px-4 py-3 "
           uk-toggle="target: #comments-${
                        post._id
                    }; animation: uk-animation-fade">
              <p class="cursor-pointer font-bold" >View all  comments
              <i class="fas fa-chevron-down uk-margin-small-left"></i></p>
          </div>

                            

          <div hidden id="comments-${
                        post._id
                    }" class="border-t pt-4 space-y-4 dark:border-gray-600 dropdown_scrollbar_comments" data-simplebar>
            
          </div>

               <div class="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                                <input id="comment-box-${
                        post._id
                    }" type="text" placeholder="${
                        isLoggedInUser
                            ? 'Add your Comment..'
                            : 'Please login or signup to write a comment'
                    }"
                                       class="bg-transparent max-h-10 shadow-none" ${
                        isLoggedInUser ? null : 'disabled'
                    }>

                            </div>

                        </div>

                    </div>`);

                var postComments = newPost.find(`#comments-${post._id}`);

                post.comments.forEach(comment => {
                    postComments.append(`<div class="flex uk-margin-small-bottom drop_content">
                                    <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                                        <img data-src="${comment.user.image.url}" alt="${comment.user.firstname + " " +comment.user.lastname}" uk-img data-width data-height
                                             class="absolute h-full rounded-full w-full">
                                    </div>
                                    <div class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                        <p class="ml-3 uk-margin-remove"><a class="uk-link-reset font-medium" href="#">${comment.user.firstname + " " +comment.user.lastname}</a></p>
                                        <p class="leading-6">${comment.content}</p>
                                        <p class="font-light">${Date.parse(comment.createdAt)}</p>
                                        <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
                                    </div>
                                </div>`);
                });

                this.postsFeed.append(newPost);
            });

            });
            // this.postsFeed.append(`<div class="flex justify-center mt-6" id="toggle"
            //              uk-toggle="target: #toggle ;animation: uk-animation-fade">
            //             <a href="#"
            //                class="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
            //                 Load more ..</a>
            //         </div>`);
        };
    }

    return {DarkMode, FeedPage, LoginPage, SignupPage, ProfilePage};
})(jQuery);
