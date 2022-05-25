$(document).ready(function () {
   let inputEmail = $('.js-input-email');
   let btnEmail = $('.js-btn-email');

   btnEmail.prop('disabled', true);

   $(inputEmail).on('keyup', function () {
      let email = $(this).val();
      if ((email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) || email == '') {
         btnEmail.prop('disabled', true);
         // console.log('invalid');
      } else {
         btnEmail.prop('disabled', false);
         // console.log('valid');
      }
   });

   $(function () {
      var count = 0;
      if ($('.evaluation__btn').closest('.page-evaluation-third')) {
         $('.evaluation__btn').prop('disabled', false);
      } else {
         $('.evaluation__btn').prop('disabled', true);
      }
      $('.js-star-item').mouseover(function () {
         count = 0;
         var i = 0;
         var j = 0;
         var thisParent = $(this).closest('.js-star-block');
         var thisItem = thisParent.find('.js-star-item');

         $(thisItem).each(function () {
            if ($(this).hasClass('active')) {
               count++;
            }
         })
         $(thisItem).each(function () {
            $(this).removeClass('active');
         })
         $(this).addClass('js-prov');
         $(thisItem).each(function () {
            $(this).removeClass('js-hover');
         })
         $(thisItem).each(function (index) {
            if ($(this).hasClass('js-prov')) {
               i = index;
            }
         })
         $(thisItem).each(function (index) {
            if (index < i + 1) {
               $(this).addClass('js-hover');
            }
         })



      })
      $('.js-star-item').mouseout(function () {
         var thisParent = $(this).closest('.js-star-block');
         var thisItem = thisParent.find('.js-star-item');

         $(this).removeClass('js-prov');
         $(thisItem).each(function () {
            $(this).removeClass('js-hover');
         })
         $(thisItem).each(function (index) {
            if (index < count) {
               $(this).addClass('active');
            }
         })

      })
      $('.js-star-item').on('click', function () {
         var count_star = 0;
         count = 0;
         var i = 0;
         var thisParent = $(this).closest('.js-star-block');
         var thisItem = thisParent.find('.js-star-item');
         $(this).addClass('active');
         $(thisItem).each(function (index) {
            if ($(this).hasClass('active')) {
               i = index;
            }
         })
         $(thisItem).each(function () {
            $(this).removeClass('active');
         })
         $(thisItem).each(function (index) {
            if (index < i + 1) {
               $(this).addClass('active');
               count_star++;
            }
         })
         if (thisParent.hasClass('js-star-block-main')) {

            if (count_star == 5 && thisParent.hasClass('js-star-block-main')) {
               window.location.href = "rewiew-by-link.html";
            }
            if (count_star < 4 && thisParent.hasClass('js-star-block-main')) {
               $('.upload__block').addClass('open');
               $('.evaluation-menu__body').addClass('open');
               $('.evaluation__btn').prop('disabled', true);
               $('.page-evaluation-main').addClass('page-evaluation-secondary');
               $('.evaluation__btn').toggleClass('open');
            } else if (thisParent.hasClass('js-star-block-main')) {
               $('.upload__block').removeClass('open');
               $('.evaluation-menu__body').removeClass('open');
               $('.evaluation__btn').prop('disabled', false);
               $('.page-evaluation-main').removeClass('page-evaluation-secondary');
               $('.evaluation__btn').toggleClass('open');
               //откроется кнопка
            }
         }
         var btnGroup = $(this).closest('.js-star-group');
         var isAllBtn = false;
         // console.log(btnGroup.find('.js-star-block'));
         // console.log(document.querySelectorAll('.js-star-block'));
         $(btnGroup.find('.js-star-block')).each(function () {
            var isHave = false;

            $($(this).find('.js-star-item')).each(function () {
               if ($(this).hasClass('active')) {
                  isHave = true;
               }
            });
            if (isHave == false) {
               isAllBtn = false;
               return false;
            }
            isAllBtn = true;
         })
         if (isAllBtn == true) {
            $('.js-btn-upload').prop('disabled', false);
         }


         if (count_star > 3 && thisParent.hasClass('js-star-block-secondary')) {
            window.location.href = "almost-done.html";
            // $('.evaluation__btn').prop('disabled', false);
            // $('.evaluation__btn-done').addClass('open');
            // $('.evaluation__btn-review').removeClass('open');
         } else if (count_star < 4 && thisParent.hasClass('js-star-block-secondary')) {
            window.location.href = "review.html";
            // $('.evaluation__btn').prop('disabled', false);
            // $('.evaluation__btn-review').addClass('open');
            // $('.evaluation__btn-done').removeClass('open');
         }
      })
      $('.js-star-del').on('click', function () {
         $($(this).closest('.evaluation-menu').find('.js-star-item')).each(function () {
            $(this).removeClass('active');
         });
         $('.js-btn-upload').prop('disabled', true);
         $('.evaluation__btn').prop('disabled', true);
         // file.val(''); //ПОЧИСТИТЬ ИНПУТ ОТ ФАЙЛА
         $('.js-btn-upload').html(' <span class="upload__icon"> <img src="images/photo.png" alt=""></span> Upload it here');

      })
      //hover end

      var file = document.querySelector('#file');
      var upload = document.querySelector('.upload');


      file.addEventListener('input', () => {
         if (file.files.length) {
            upload.innerText = file.files[0].name;
            $('.evaluation__btn').prop('disabled', false);
            $('.rewiew-by-link__btn').prop('disabled', false);
         }
      });

      upload.addEventListener('click', () => {
         file.click();
      });



   });
   $('.js-textarea-review').on('keyup', function () {
      var val = $(this).val();
      if (val != '') {
         $('.js-btn-review').prop('disabled', false);
      } else {
         $('.js-btn-review').prop('disabled', true);
      }
   });
   $('.almost-done__btn').on('click', function () {
      $(this).target = "_blank";
      window.open('https://www.google.com.ua/');
      return false;
   })
})

