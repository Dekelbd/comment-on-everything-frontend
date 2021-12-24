var elements = (function ($) {
    var Post = {
        createPostContainer: function () {
            return $('<div/>', {
                class: 'bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0',
            });
        },

        createPostHeader: function (userImageUrl, username, isOwnThePost) {
            var postHeaderEl = $('<div/>', {
                class: 'flex justify-between items-center px-4 py-3',
            });

            var innerHeader = $('<div/>', {
                class: 'flex flex-1 items-center space-x-4',
            });

            var profileImageLinkContainer = $('<a/>', {
                href: '#',
            });

            var profileImageBorder = $('<div/>', {
                class:
                    'bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full',
            });

            var profileImage = $('<img/>', {
                class: 'bg-gray-200 border border-white rounded-full w-8 h-8',
                'data-src': userImageUrl,
                'uk-img': "",
                'data-width': "",
                'data-height': "",
            });

            var userNameTitle = $('<span/>', {
                class: 'block capitalize font-semibold dark:text-gray-100',
            }).text(username);

            var editPostContainer = $('<div/>', {
                class: isOwnThePost ? '' : 'uk-hidden',
            });

            var editOptionsBtn = $('<a/>', {
                href: '#',
            });
            var editOptionsIcon = $('<i/>', {
                class:
                    'icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700',
            });

            var editOptionsDropDownContainer = $('<div/>', {
                class:
                    'bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700',
                'uk-drop': 'mode: hover;pos: top-right',
            });

            var editOptionsList = $('<ul/>', {
                class: 'space-y-1',
            });
            var editBtnContainer = $('<li/>');

            var editBtn = $('<a/>', {
                class:
                    'flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800',
                href: '#',
            });

            var editIcon = $('<i/>', {
                class: 'uil-edit-alt mr-1',
            });

            var editOptionsSeperator = $('<li/>').append(
                $('<hr/>', {
                    class: '',
                }),
            );
            var deleteBtnContainer = $('<li/>');

            var deleteBtn = $('<a/>', {
                class:
                    'flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600',
            });

            var deleteIcon = $('<i/>', {
                class: 'uil-trash-alt mr-1',
            });

            deleteBtnContainer.append(deleteBtn);
            deleteBtn.append(deleteIcon, 'Delete');

            editBtnContainer.append(editBtn);
            editBtn.append(editIcon, 'Edit Post');

            editOptionsList.append(
                editBtnContainer,
                editOptionsSeperator,
                deleteBtnContainer,
            );
            editOptionsDropDownContainer.append(editOptionsList);

            editOptionsBtn.append(editOptionsIcon);
            editPostContainer.append(editOptionsBtn, editOptionsDropDownContainer);

            profileImageBorder.append(profileImage);
            profileImageLinkContainer.append(profileImageBorder);
            innerHeader.append(profileImageLinkContainer, userNameTitle);
            postHeaderEl.append(innerHeader, editPostContainer);

            return postHeaderEl;
        },

        createPostImage: function (postImageUrl) {
            var postImageEl = $('<div/>', {
                'uk-lightbox': ""
            })

            var imageLink = $('<a/>', {
                href: postImageUrl,
            });

            var image = $('<img/>', {
                'data-src': postImageUrl,
                'uk-img': "",
                'data-width': "",
                'data-height': "",
            });

            imageLink.append(image);
            postImageEl.append(imageLink);
            return postImageEl;
        },

        createPostBottomSectionContainer: function () {
            return $('<div/>', {
                class: 'py-3 px-4 space-y-3',
            });
        },
        createPostReactionsContainer: function () {
            var reactionsContainerEl = $('<div/>', {
                class: 'uk-margin-small-left flex space-x-4 lg:font-bold',
            });

            var likeLink = $('<a/>', {
                class:"flex items-center space-x-2",
                href: '#',
            });
            var likeIcon = $('<i/>', {
                class: 'fas fa-thumbs-up',
            });
            var likeText = $('<div/>').text('Like');
            var commentLink = $('<a/>', {
                href: '#',
            });
            var commentIcon = $('<i/>', {
                class: 'fas fa-comment-dots',
            });
            var commentText = $('<div/>').text('Comment');
            var reportLink = $('<a/>', {
                href: '#',
            });
            var reportIcon = $('<i/>', {
                class: 'far fa-flag',
            });
            var reportText = $('<div/>').text('Report');

            likeLink.append(likeIcon, likeText);

            commentLink.append(commentIcon, commentText);

            reportLink.append(reportIcon, reportText);

            reactionsContainerEl.append(likeLink, commentLink, reportLink);
            return reactionsContainerEl;
        },
        createPostLikesContainer: function (likesCount) {
            var likesContainerEl = $('<div/>', {
                class: 'flex items-center space-x-3',
            });
            var likeImagesContainer = $('<div/>', {
                class: 'flex items-center',
            });
            var commenter1Image = $('<img/>', {
                class:
                    'w-6 h-6 rounded-full border-2 border-white dark:border-gray-900',
                src: 'assets/images/avatars/avatar-1.jpg',
            });
            var commenter2Image = $('<img/>', {
                class:
                    'w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2',
                src: 'assets/images/avatars/avatar-4.jpg',
            });
            var commenter3Image = $('<img/>', {
                class:
                    'w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2',
                src: 'assets/images/avatars/avatar-2.jpg',
            });

            var likesCountText = $('<div/>', {
                class: 'dark:text-gray-100',
            }).text(`${likesCount} Likes`);

            likeImagesContainer.append(
                commenter1Image,
                commenter2Image,
                commenter3Image,
            );

            likesContainerEl.append(likeImagesContainer, likesCountText);
            return likesContainerEl;
        },

        createReviewAndCommentsContainer: function () {
            return $('<div/>');
        },

        createPostReview: function (reportTime, username, reviewText) {
            var postReportEl = $('<article/>', {
                class:
                    'user-review uk-comment uk-comment-primary uk-border-rounded uk-margin-small-bottom',
            });

            var reportHeaderContainer = $('<div/>', {
                class: 'uk-grid-medium uk-flex-middle',
            });

            var reportHeader = $('<div/>', {
                class: 'uk-width-expand',
            });

            var usernameTitleContainer = $('<p/>', {
                class: 'ml-3 uk-margin-remove',
            });

            var usernameTitleLink = $('<a/>', {
                class: 'uk-link-reset font-medium',
            }).text(username);
            usernameTitleContainer.append(usernameTitleLink);

            var reportTimeContainer = $('<ul/>', {
                class:
                    'uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top',
            });

            var reportTimeItem = $('<li/>');

            var reportTimeLink = $('<a/>').text(reportTime);

            reportTimeItem.append(reportTimeLink);
            reportTimeContainer.append(reportTimeItem);

            var reportBodyContainer = $('<div/>', {
                class: 'uk-comment-body',
            });
            var reportBodyText = $('<p/>').text(reviewText);

            reportHeader.append(usernameTitleContainer, reportTimeContainer);
            reportBodyContainer.append(reportBodyText);
            reportHeaderContainer.append(reportHeader);
            postReportEl.append(reportHeaderContainer, reportBodyContainer);
            return postReportEl;
        },
        createToggleCommentsSection: function (postId, commentsCount) {
            var toggleCommentsEl = $('<div/>', {
                class: 'flex justify-center px-4 py-3',
                'uk-toggle': `target: #comments-${postId}; animation: uk-animation-fade`,
            });
            var commentsCountText = $('<p/>', {
                class: 'cursor-pointer font-bold',
            }).text(commentsCount !== 0 ? `view all ${commentsCount} comments` : '');

            var goToCommentsIcon = $('<i/>', {
                class: 'fas fa-chevron-down uk-margin-small-left',
            });
            commentsCountText.append(goToCommentsIcon);
            toggleCommentsEl.append(commentsCountText);
            return toggleCommentsEl;
        },

        createCommentsContainer: function (postId) {
            return $('<div/>', {
                class:
                    'border-t pt-4 space-y-4 dark:border-gray-600 dropdown_scrollbar_comments',
                id: `comments-${postId}`,
                'data-simplebar': "",
                "hidden":""
            });
        },

        createInputCommentBox: function (postId, isLoggedIn) {
            var commentInputEl = $('<div/>', {
                class:
                    'bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800',
                id: `comment-box-${postId}`,
            });
            var inputBox = $('<input/>', {
                class: 'bg-transparent max-h-10 shadow-none',
                type: 'text',
                placeholder: isLoggedIn
                    ? 'Add your Comment..'
                    : 'Please login or signup to write a comment',
                disabled: isLoggedIn,
            });
            commentInputEl.append(inputBox);
            return commentInputEl;
        },

        createComment: function (
            userImageUrl,
            username,
            userProfileLink,
            content,
            time,
        ) {
            var commentEl = $('<div/>', {
                class: 'flex uk-margin-small-bottom drop_content',
            });

            var userImgContainer = $('<div/>', {
                class: 'w-10 h-10 rounded-full relative flex-shrink-0',
            });

            var userImg = $('<img/>', {
                class: 'absolute h-full rounded-full w-full',
                'data-src': userImageUrl,
                alt: username,
                'uk-img': "",
                'data-width': "",
                'data-height': "",
            });

            var contentContainer = $('<div/>', {
                class:
                    'text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100',
            });

            var commentTitle = $('<p/>', {
                class: 'ml-3 uk-margin-remove',
            });

            var userLink = $('<a/>', {
                class: 'uk-link-reset font-medium',
                href: userProfileLink,
            }).text(username);

            var commentContent = $('<p/>', {
                class: 'leading-6',
            }).text(content);

            var commentTime = $('<p/>', {
                class: 'font-light',
            }).text(time);
            commentEl.append(userImgContainer);
            userImgContainer.append(userImg);
            contentContainer.append(commentTitle);
            commentTitle.append(userLink, commentContent, commentTime);
            return commentEl;
        },

        createLoadMoreElement: function () {
            var loadMoreEl = $('<div/>', {
                class: 'flex justify-center mt-6',
                id: 'toggle',
                'uk-toggle': 'target: #toggle ;animation: uk-animation-fade',
            });

            var innerLink = $('<a/>', {
                class:
                    'bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white',
                id: 'toggle',
                href: '#',
            }).text('Load more ..');

            loadMoreEl.append(innerLink);

            return loadMoreEl;
        },

        /**
         image definition
         @typedef {Object} image
         @property {string} _id .
         @property {string} url .
         @property {string} key .
         */
        /**
         user definition
         @typedef {Object} user
         @property {string} _id .
         @property {string} firstname .
         @property {string} lastname .
         @property {string} fullName .
         @property {image} image .
         */

        /**
         comment definition
         @typedef {Object} comment
         @property {string} _id .
         @property {string} content .
         @property {Date} createdAt .
         @property {user} user .
         */

        /**
         post definition
         @typedef {Object} post
         @property {string} _id .
         @property {string} hashtag .
         @property {string} description .
         @property {user} user .
         @property {Date} createdAt .
         @property {image} image .
         @property {reaction[]} reactions .
         @property {comment[]} comments .
         */

        /**
         reaction definition
         @typedef {Object} reaction
         @property {string} _id .
         @property {boolean} like .
         @property {boolean} report .
         @property {Date} createdAt .
         @property {user} user .
         */
        /**
         hashtag definition
         @typedef {Object} hashtag
         @property {string} _id .
         @property {boolean} title .
         @property {post[]} posts .
         */

        /**
         *rendering single post element
         * @param {post} post
         * @param {boolean} isLoggedIn
         */
        createPost: function (post, isLoggedIn) {
            var postContainerEl = this.createPostContainer();
            var postHeaderEl = this.createPostHeader(
                post.user.image.url,
                post.user.firstname + " " + post.user.lastname,
            );
            var postImageEl = this.createPostImage(post.image.url);
            var postBottomSectionContainerEl =
                this.createPostBottomSectionContainer();
            var reactionsContainerEl = this.createPostReactionsContainer();
            var likesContainerEl = this.createPostLikesContainer(
                post.reactions.length,
            );
            var reviewAndCommentsContainerEl =
                this.createReviewAndCommentsContainer();
            var postReportEl = this.createPostReview(
                post.createdAt,
                post.user.fullName,
                post.description,
            );
            var toggleCommentsEl = this.createToggleCommentsSection(
                post._id,
                post.comments.length,
            );
            var commentsContainerEl = this.createCommentsContainer(post._id);
            var commentInputEl = this.createInputCommentBox(post._id, isLoggedIn);
            // var commentEl = this.createComment();
            var loadMoreEl = this.createLoadMoreElement();

            for (const comment of post.comments) {
                commentsContainerEl.append(
                    this.createComment(
                        comment.user.image.url,
                        comment.user.fullName,
                        '#',
                        comment.content,
                        comment.createdAt,
                    ),
                );
            }

            reviewAndCommentsContainerEl.append(
                postReportEl,
                toggleCommentsEl,
                commentsContainerEl,
                commentInputEl,
            );
            postBottomSectionContainerEl.append(
                reactionsContainerEl,
                likesContainerEl,
            );
            postContainerEl.append(
                postHeaderEl,
                postImageEl,
                postBottomSectionContainerEl,
            );
            return postContainerEl;
        },

        /**
         *
         * @param {post[]} posts
         * @param {boolean} isLoggedIn
         * @param {Object}containerEl
         */
        renderPosts: function (posts, isLoggedIn, containerEl) {
            for (const post of posts) {
                containerEl.append(this.createPost(post, isLoggedIn));
            }
        },
    };

    var messageModalElement = $(`  <div id="modal-sections" uk-modal>
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

    return {Post};
})(jQuery);
