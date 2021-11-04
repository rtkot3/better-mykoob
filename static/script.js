function f_system_version_container() {   // Добавить приписку '[modded by rtkot3]'
    var system_version_container = document.querySelector('#system-version-container')
    var mykoob_logo = document.querySelector('.mykoob-logo')
    if (!system_version_container) {
        setTimeout(() => { f_system_version_container(); }, 1) }
    else { 
        mykoob_logo.style.background = ('url(https://i.imgur.com/mErud3P.png) no-repeat')
        mykoob_logo.title = '[modded by rktot3]'
        system_version_container.innerText += ' [modded by rktot3]' }
}

function f_conversations_container() {  // Увеличить левый чат на '964px'
    var conversations_container = document.querySelector('#conversations_container')
    if (!conversations_container) {
        setTimeout(() => { f_conversations_container(); }, 10) }
    else { 
        conversations_container.style.height = '964px' }
}

function f_writing_box() {   // Увеличить пространство для ввода текста на '462px'
    var writing_box = document.querySelector('.writing-box')
    if (!writing_box) {
        setTimeout(() => { f_writing_box(); }, 10) }
    else { 
        writing_box.style.height = '462px' }
}

function f_new_message() {   // Увеличить пространство для ввода нового сообщения на '955px'
    var new_message = document.querySelector('.new-message')
    if (!new_message) {
        setTimeout(() => { f_new_message(); }, 10) }
    else { 
        new_message.style.height = '955px' }
}

function f_text_field() {   // Увеличить пространство для ввода нового сообщения на '955px'
    var text_field = document.querySelector('.text-field')
    if (!text_field) {
        setTimeout(() => { f_text_field(); }, 10) }
    else { 
        text_field.style.height = '870px' }
}

function f_button_box() {   // Удалить нижние кнопки, а так же переместить из наверх
    var button_box = document.querySelector('.button-box')
    if (!button_box) {
        setTimeout(() => { f_button_box(); }, 10) }
    else { 
        var writing_box = document.querySelector('.writing-box')
        button_box.style.padding = 0
        button_box.style.marginBottom = '10px'
        value = button_box
        button_box.outerHTML = ''
        button_box = value
        writing_box.innerHTML = button_box.outerHTML + writing_box.innerHTML }
}

function f_load_more_conversations_container() {   // При наведении мыши, открывается 'load_more_conversations_container'
    var load_more_conversations_container = document.querySelector('#load_more_conversations_container')
    if (!load_more_conversations_container) {
        setTimeout(() => { f_load_more_conversations_container(); }, 100) }
    else { 
        load_more_conversations_container.addEventListener("mouseenter", function()  {
            load_more_conversations_container.click() 
            setTimeout(() => { f_load_more_conversations_container(); }, 1000) }) } 
}

function f_load_more_messages_container() {   // При наведении мыши, открывается 'load_more_messages_container'
    var load_more_messages_container = document.querySelector('#load_more_messages_container')
    if (!load_more_messages_container) {
        setTimeout(() => { f_load_more_messages_container(); }, 1000) }
    else { 
        load_more_messages_container.addEventListener("mouseenter", function()  {
            load_more_messages_container.click() 
            setTimeout(() => { f_load_more_messages_container(); }, 1000) }) } 
}

function f_add_file_wrap() {   // Добавить спам окно в елемент 'add_file_wrap' и удалить '(Max. 50 MB)'
    var add_file_wrap = document.querySelector('.add-file-wrap')
    if (!add_file_wrap) {
        f_add_file_wrap() }
    else { 
        value = '<input style="width: 55px; padding: 4px;" type="number" id="r3_spam_delay" class="messaging-search" placeholder="Delay"> <input style="padding: 4px;" type="text" id="r3_spam_input" class="messaging-search" placeholder="Message..."> <button style="color: black;" id="r3_spam_btn" class="button-new">Spam</button>'
        add_file_wrap.innerHTML = value + add_file_wrap.innerHTML
        add_file_wrap.innerHTML = add_file_wrap.innerHTML.replace('(Max. 50 MB)','') }
}

function f_add_file_wrap_for_ultra() {   // Добавить спам (Ultra) окно в елемент 'add_file_wrap' и удалить '(Max. 50 MB)'
    var add_file_wrap = document.querySelector('.add-file-wrap')
    if (!add_file_wrap) {
        f_add_file_wrap_for_ultra() }
    else { 
        value = '<input style="width: 95px; padding: 4px;" type="number" id="r3_spam_sms_count" class="messaging-search" placeholder="SMS Count"> <input style="padding: 4px; width: 150px;" type="text" id="r3_spam_input" class="messaging-search" placeholder="Message..."> <button style="color: black;" id="r3_spam_btn" class="button-new">UltraSpam</button>'
        add_file_wrap.innerHTML = value + add_file_wrap.innerHTML
        add_file_wrap.innerHTML = add_file_wrap.innerHTML.replace('(Max. 50 MB)','') }
}

function f_r3_spam_ultra() {   // Работоспособность спама (Ultra)
    var r3_spam_btn = document.querySelector('#r3_spam_btn')
    if (!r3_spam_btn) {
        setTimeout(() => { f_r3_spam_ultra(); }, 10) }
    else { 
        r3_spam_btn.addEventListener("click", function()  { 
            var r3_spam_sms_count = document.querySelector('#r3_spam_sms_count')
            var r3_spam_input = document.querySelector('#r3_spam_input')
            var message_text_conversation = document.querySelector('#message-text-conversation')
            if (r3_spam_sms_count.value != '' && r3_spam_input.value != '') {
                if (r3_spam_sms_count.value > 1350  ) {
                    r3_spam_sms_count.value = 1350 }
                if (r3_spam_sms_count.value < 1  ) {
                    r3_spam_sms_count.value = 1 }
                r3_spam_btn.disabled = true
                r3_spam_btn.style.color = 'red'
                r3_spam_input.disabled = true
                r3_spam_sms_count.disabled = true
                message_text_conversation.disabled = true
                message_text_conversation.style.cursor = 'not-allowed'
                var value = 1
                console.log('[mykoob] - Отсылаю запросы для отправки сообщений(я)')
                while(true) {
                    var formData = new FormData()
                    formData.append("user_id", localStorage.user_id)
                    formData.append("content", r3_spam_input.value)
                    formData.append("group_id", f_find_group_id())
                    var request = new XMLHttpRequest()
                    request.open("POST", "https://family.mykoob.lv/?messagingWeb/sendMessageToGroup")
                    request.send(formData)
                    if (value >= r3_spam_sms_count.value) { break }
                    value++ }
                console.log('[mykoob] - Запросы на отправку сообщений(я) отправлены, ждем перезагрузки страницы')
                setTimeout(() => { location.reload(); }, value * 5) } 
            else {
                console.error('[mykoob] - Ошибка! Вам нужно заполнить все поля!') } }) }
}

function f_find_group_id() {
    var messages_container = document.querySelector('#messages_container')
    return messages_container.dataset.group_id
}

function f_r3_spam_btn() {   // Работоспособность кнопки 'r3_spam_btn' (Спамбот)
    var r3_spam_btn = document.querySelector('#r3_spam_btn')
    if (!r3_spam_btn) {
        setTimeout(() => { f_r3_spam_btn(); }, 10) }
    else { 
        r3_spam_btn.addEventListener("click", function()  {
            if (spam_btn) {
                spam_btn = false
                f_spam_bot_cheker() } 
            else {
                spam_btn = true
                f_spam_bot_cheker() } }) }
}

function f_spam_bot_cheker() {   // Спамбот чекер
    var message_text_conversation = document.querySelector('#message-text-conversation')
    var r3_spam_btn = document.querySelector('#r3_spam_btn')
    var r3_spam_input = document.querySelector('#r3_spam_input')
    if (r3_spam_input.value == '') { 
        console.error('[mykoob] - Ошибка: "отсутствие текста"')
        spam_btn = false
        return }
    if (!r3_spam_btn) {
        setTimeout(() => { f_spam_bot(); }, 10) }
    if (spam_btn) {
        conversations_container.addEventListener("click", function() {
            if (spam_btn == true) { f_spam_bot_safer() }
        })
        r3_spam_btn.style.color = 'red'
        r3_spam_input.style.cursor = 'not-allowed'
        message_text_conversation.style.cursor = 'not-allowed'
        r3_spam_input.disabled = true
        message_text_conversation.disabled = true
        console.log('[mykoob] - Спам бот включён')
        f_spam_bot() } 
    else {
        console.log('[mykoob] - Спам бот выключен')
        f_spam_bot() }

}

function f_spam_bot() {   // Спамбот
    var message_text_conversation = document.querySelector('#message-text-conversation')
    var conversation_send_message_button = document.querySelector('#conversation-send-message-button')
    var r3_spam_delay = document.querySelector('#r3_spam_delay')
    if (r3_spam_delay.value == '' || r3_spam_delay.value <= 0 ) {
        r3_spam_delay.value = 100 }
    if (spam_btn) {
        message_text_conversation.value = r3_spam_input.value
        conversation_send_message_button.click()
        setTimeout(() => { f_spam_bot(); }, r3_spam_delay.value) } 
    else {
        r3_spam_btn.style.color = 'black'
        r3_spam_input.style.cursor = 'auto'
        message_text_conversation.style.cursor = 'auto'
        r3_spam_input.disabled = false
        message_text_conversation.disabled = false
        r3_spam_input.value = ''
        message_text_conversation.value = '' }
}

function f_spam_bot_safer() {   // Защита от случайного спама
    console.warn('[mykoob] - Внимание! Защита от случайного спама сработана')
    spam_btn = false
}

function f_delete_message_to_all() {   // Добавить елемент 'r3_delete_all' и добавть EventListener при нажатии кнопки
    var delete_message_to_all = document.querySelectorAll('.delete-message-to-all')
    if (!delete_message_to_all[0]) {
        setTimeout(() => { f_delete_message_to_all(); }, 10) }
    else { 
        var search_conversation_container = document.querySelector('.search_conversation_container')
        value = '<button style="color: black; margin-left: 3px" id="r3_delete_all" class="button-new">Delete All</button>'
        search_conversation_container.outerHTML += value
        var r3_delete_all = document.querySelector('#r3_delete_all')
        r3_delete_all.addEventListener("click", function()  {
            f_delete_all_messages() }) }
}

function f_delete_all_messages() {    // Удаление всех сообщений из чата разом (для всех)
    var r3_delete_all = document.querySelector('#r3_delete_all')
    if (!r3_delete_all) {
        setTimeout(() => { delete_all_messages(); }, 100) }
    else { 
        r3_delete_all.style.color = 'red'
        r3_delete_all.disabled = true
        console.log('[mykoob] - Начата операция по удалению сообщений')
        f_r3_delete_all() } 
}

function f_r3_delete_all() {    // Работоспособность удаления всех сообщений из чата разом (для всех)
    var load_more_messages_container = document.querySelector('#load_more_messages_container')
    if (load_more_messages_container) {
        load_more_messages_container.click()
        setTimeout(() => { f_r3_delete_all(); }, 50) }
    else {
        var delete_message_to_all = document.querySelectorAll('.delete-message-to-all')
        if(delete_message_to_all[0]) {
            console.log('[mykoob] - Удаляю сообщения...')
            delete_message_to_all.forEach(element => {
                element.click()
                var mk_btn_gray = document.querySelector('.mk-btn-gray')
                mk_btn_gray.click() })
            console.log('[mykoob] - Операция по удалению завершена') } 
        else {
            console.log('[mykoob] - Сообщения, которые возможны для удаления не найдены') }
        r3_delete_all.style.color = 'black'
        r3_delete_all.disabled = false }
}

function f_top_settings() {   // Проверить, существут ли 'top_settings' и вызвать другую функцию
    var top_settings = document.querySelector('.top_settings')
    if (!top_settings) {
        setTimeout(() => { f_top_settings(); }, 10) }
    else { 
        top_settings.addEventListener("click", f_edit_dialog )} 
    }

function f_edit_dialog() {  // Добавть елементы в 'edit_dialog'
    var edit_dialog = document.querySelector('.edit-dialog')
    if (!edit_dialog) {
        setTimeout(() => { f_edit_dialog(); }, 100) }
    else { 
        f_profile_picture()
        f_personal_data() }
}

function f_profile_picture() {  // 'Profila bilde' | Изминить аватарку (локально)
    var right_block = document.querySelectorAll('.right-block')
    if(!localStorage.gif) {
        value = '<div style="margin-top:10px"><label style="margin-right:5px">Gif/Photo:</label><input class="longer" style="height:20px; margin-right:5px" id="r3_photo_input" placeholder="example.com/photo.png" type="text"><label class="button-new" id="r3_photo_save">Save</label><label class="button-new" id="r3_photo_clear">Clear</label></div>' }
    else { value = '<div style="margin-top:10px"><label style="margin-right:5px">Gif/Photo:</label><input class="longer" style="height:20px; margin-right:5px" id="r3_photo_input" placeholder="example.com/photo.png" type="text" value="' + localStorage.gif + '"><label class="button-new" id="r3_photo_save">Save</label><label class="button-new" id="r3_photo_clear">Clear</label></div>' }   
    right_block.forEach(element => {
        value2 = element.innerText.trim()
        if (value2 == 'Atļautās bildes ir: .jpg, .jpeg, .png') {
            element.innerHTML += value
            f_r3_photo_save() }
    });
}

function f_r3_photo_save() {    // Сохранить ссылку на фото в localStorage(gif) | Удалить ссылку localStorage(gif)
    var r3_photo_save = document.querySelector('#r3_photo_save')
    var r3_photo_clear = document.querySelector('#r3_photo_clear')
    var r3_photo_input = document.querySelector('#r3_photo_input')
    r3_photo_save.addEventListener("click", function()  {
        if (r3_photo_input.value != '') {
            localStorage.setItem('gif', r3_photo_input.value)
            location.reload() }
    })
    r3_photo_clear.addEventListener("click", function()  {
        if (!(!localStorage.gif)) {
            localStorage.removeItem('gif')
            location.reload()  }
    })
}

function f_change_profile_picture() {   // Поменять img в ?profile
    var my_profile_picture = document.querySelector('.my_profile_picture')
    if (!my_profile_picture) {
        setTimeout(() => { f_change_profile_picture(); }, 10) }
    else { 
        if (!localStorage.gif) { return }
        else {
            my_profile_picture.src = localStorage.gif }
    } 
}

function f_personal_data() {  // 'Personal data' | Изминить персональный код 
    var right_block = document.querySelectorAll('.right-block')
    right_block.forEach(element => {
        if (element.querySelector('input') != null) {
            if (element.querySelector('input').name == 'personalid') {
                element.querySelector('input').disabled = false
                element.querySelector('input').className = 'longer' }}
    });
}

function f_user_id() {  // Узнать 'user_id'
    if (localStorage.user_id) { return }
        var user_id = document.querySelector('.my_profile_picture')
    if (!user_id) {
        setTimeout(() => { f_user_id(); }, 10) }
    else { 
        user_id = user_id.id.replace('profile_image_','')
        localStorage.setItem('user_id', user_id) }
}

function f_my_profile_picture() { // Поменять style 'my_profile_picture'
    var my_profile_picture = document.querySelector('.my_profile_picture')
    if (!my_profile_picture) {
        setTimeout(() => { f_my_profile_picture(); }, 10) }
    else { 
        my_profile_picture.style.height = '100%'
        my_profile_picture.style.width = '100%' }
}

function f_profile_container() { // Добавить приписку'user_id' к имени и фамилии на ?profile
    var profile_container = document.querySelector('.profile-container .fl')
    if (!profile_container) {
        setTimeout(() => { f_profile_container(); }, 10) }
    else { 
        profile_container.innerHTML += ' [ ID: ' + localStorage.user_id + ' ]'  }
}

function f_scroll_to_date() {   // Прокурить до сегоднешней даты
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = "lesson_day_" + yyyy + '-' + mm + '-' + dd;
    today = today.toString()
    var today = document.querySelector('#' + today)
    if (!today) {
        return }
    else { 
        today.scrollIntoView()
        scrollBy(0, -200) }
}

function f_conversation_member() { // Добавить приписку 'user_id' в чате к собеседникам
        try {
            var conversation_member = document.querySelector('.conversation_member')
            conversation_member.outerHTML = conversation_member.innerText +  ' [  ID: ' + conversation_member.dataset.member_user_id + ' ]' }
        catch(err) {}
}

function f_write_by_id() {  // Написать человеку используя его 'user_id'
    var block_sizeable_contacts = document.querySelector('.block.sizeable.contacts')
    if (!block_sizeable_contacts) {
        setTimeout(() => { f_write_by_id(); }, 100) }
    else { 
        value = '<div class="block sizeable contacts"> <span class="title">Write by ID:</span> <input id="r3_input_user" type="number" class="messaging-search" style="height: 20px; width: 70px" placeholder="User ID"> <button id="r3_add_user" class="button-new">Add</button></div>'
        block_sizeable_contacts.outerHTML += value}
        var r3_add_user = document.querySelector('#r3_add_user')
        r3_add_user.addEventListener("click", function()  {
            var r3_input_user = document.querySelector('#r3_input_user')
            if (r3_input_user.value != '') {
                f_get_user_data(r3_input_user.value,1) }
        })
}

function f_get_user_data(value,a) {   // Подать form-data запрос на получение JSON данных
    var formData = new FormData()
    data_choice = a;

    formData.append("data", '{"user_id":"' + localStorage.user_id + '","target_user_id":"' + value + '"}')

    var request = new XMLHttpRequest()
    request.open("POST", "https://family.mykoob.lv/?messagingWeb/getUserDetails")
    request.send(formData)
    data_form_value = request
    f_read_request()
}

function f_read_request() {     // Сохранить JSON запрос в переменную 'data_output_value'
    if (data_form_value.response == ''){
        setTimeout(() => { f_read_request(); }, 1)
    } else {
        data_output_value = JSON.parse(data_form_value.response)
        if (data_choice == 1) {
            data_output_value = data_output_value['name_surname']
            data_choice = 0
            var contacts_all_tags = document.querySelector('#contacts-all-tags')
            value = '<div class="tag" data-user="' + r3_input_user.value + '">' + data_output_value + '<span class="cross-icon"></span></div>'
            contacts_all_tags.innerHTML += value }
    }
}

function f_left_data() {    // r3 Настройки в left_data
    var my_profile_picture = document.querySelector('.my_profile_picture')
    if (!my_profile_picture) {
        setTimeout(() => { f_left_data(); }, 10) }
    else { 
        var left_data = document.querySelectorAll('.clear')
        left_data = left_data[4]    

        if (localStorage.getItem('checkbox_r3_spam_ultra') == 'false') {
            value = '<div style="margin-top: 10px"> <input id="r3_spam_ultra" type="checkbox"> <lable>UltraSpam</lable> </div>' } 
        else {
            value = '<div style="margin-top: 10px"> <input id="r3_spam_ultra" type="checkbox" checked> <lable>UltraSpam</lable> </div>'}

        if (localStorage.getItem('checkbox_r3_msg_sound') == 'false') {
            value2 = '<div style="margin-top: 10px"> <input id="r3_msg_sound" type="checkbox"> <lable>Message sound</lable> </div>' } 
        else {
            value2 = '<div style="margin-top: 10px"> <input id="r3_msg_sound" type="checkbox" checked> <lable>Message sound</lable> </div>'}

        left_data.outerHTML = value + value2 + left_data.outerHTML
        var r3_spam_ultra = document.querySelector('#r3_spam_ultra')
        var r3_msg_sound = document.querySelector('#r3_msg_sound')

        r3_spam_ultra.addEventListener("click", function()  {
            console.log('[mykoob] - UltraSpam = ' + r3_spam_ultra.checked)
            localStorage.setItem('checkbox_r3_spam_ultra', r3_spam_ultra.checked)
        })

        r3_msg_sound.addEventListener("click", function()  {
            console.log('[mykoob] - Message sound = ' + r3_msg_sound.checked)
            localStorage.setItem('checkbox_r3_msg_sound', r3_msg_sound.checked)
            location.reload()
        }) }

}

function f_msg_sounds() {   // Звук нового сообщения в майкубе
    var new_msg_count = localStorage.new_msg
    var new_messages_alert = document.querySelector('#new_messages_alert')

    if (new_messages_alert.style.display == 'none') {
        localStorage.setItem('new_msg', 0)}
    
    if (new_messages_alert.style.display == 'none' ||  new_messages_alert.innerText == '' || new_messages_alert.innerText == new_msg_count) {
        setTimeout(() => { f_msg_sounds(); }, 500) }
    else {
        localStorage.setItem('new_msg', new_messages_alert.innerText)
        var audio = new Audio('https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3');
        audio.play();
        console.log('You have new message!')
        setTimeout(() => { f_msg_sounds(); }, 1000) }
}








if (location.origin == 'https://family.mykoob.lv' ) {

    if (!localStorage.checkbox_r3_spam_ultra) {
        localStorage.setItem('checkbox_r3_spam_ultra', false)}
    
    if (!localStorage.checkbox_r3_msg_sound) {
        localStorage.setItem('checkbox_r3_msg_sound', true)}

    if (!localStorage.new_msg) {
        localStorage.setItem('new_msg', 0)}

    var system_version_container = document.querySelector('#system-version-container')
    var conversations_container = document.querySelector('#conversations_container')
    var writing_box = document.querySelector('.writing-box')
    var new_message = document.querySelector('.new-message')
    var text_field = document.querySelector('.text-field')
    var button_box = document.querySelector('.button-box')
    var add_file_wrap = document.querySelector('.add-file-wrap')
    var load_more_conversations_container = document.querySelector('#load_more_conversations_container')
    var spam_btn = false
    var delete_message_to_all = document.querySelectorAll('.delete-message-to-all')
    var top_settings = document.querySelector('.top_settings')
    var data_form_value;
    var data_output_value;
    var data_choice = 0;
}

if (location.origin == 'https://family.mykoob.lv' ) {

    f_system_version_container()
    f_top_settings()

    if (localStorage.checkbox_r3_msg_sound == 'false') { } 
    else {     
        setTimeout(() => { f_msg_sounds(); }, 500) 
    }   

}

if (location.href == 'https://family.mykoob.lv/?profile' ) {

    f_user_id()
    f_profile_container()
    f_my_profile_picture()
    f_change_profile_picture()
    f_left_data()
}

if (location.href == 'https://family.mykoob.lv/?messagingWeb') {

    f_conversations_container()
    f_writing_box()
    f_new_message()
    f_text_field()
    f_button_box()
    f_load_more_conversations_container()

    if (localStorage.checkbox_r3_spam_ultra == 'false') {
        f_add_file_wrap()
        f_r3_spam_btn() } 
    else {
        f_add_file_wrap_for_ultra() 
        f_r3_spam_ultra() }

    f_delete_message_to_all()
    f_write_by_id()

    conversations_container.addEventListener("click", function()  {
        setTimeout(() => { f_load_more_messages_container(); }, 1000)
    })

    document.querySelector('body').addEventListener("click", function()  {
        setTimeout(() => { f_conversation_member(); }, 1000)
    })
        
    
}

if (location.href == 'https://family.mykoob.lv/?lessonsplan') {

    f_scroll_to_date()
    
}
