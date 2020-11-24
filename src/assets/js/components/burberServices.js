const changingBgItem = '.section-3__rightSide__bg';
const mainTitleServices = '.section-3__rightSide__title'
const mainDesc = '.section-3__rightSide__desc';
const mainCostBlock = '.section-3__cost';
const defaultServicesListItem = '.section-3__leftSide__serviceList-item';
const defaultServicesListItemActive = 'section-3__leftSide__serviceList-item__active';

const servicesBg1 = "url('assets/img/burberGalleryService/shave.jpg')";
const servicesBg2 = "url('assets/img/burberGalleryService/shaveMachine.jpg')";
const servicesBg3 = "url('assets/img/burberGalleryService/fade.png')";
const servicesBg4 = "url('assets/img/burberGalleryService/cutBeard.jpg')";
const servicesBg5 = "url('assets/img/burberGalleryService/modelBeard.jpg')";
const servicesBg6 = "url('assets/img/burberGalleryService/royalShave.jpg')";
const servicesBg7 = "url('assets/img/burberGalleryService/BeardToning.jpg')";
const servicesBg8 = "url('assets/img/burberGalleryService/toningGrayHair.jpg')";
const servicesBg9 = "url('assets/img/burberGalleryService/waxingHairRemoval.jpg')";

const servicesDesc1 = "Короткая или удлиненная, провоцирующая либо классическая - такая, какую захотите";
const servicesDesc2 = "Одна-две насадки, уверенная работа машинкой и ничего лишнего на голове";
const servicesDesc3 = "Стрижка машинкой, с использованием нескольких насадок";
const servicesDesc4 = "Убрать объем, придать бороде форму, в общем, выглядеть по-человечески";
const servicesDesc5 = "К стрижке бороды добавляем распаривание полотенцем и выводим четкие линии опасным лезвием";
const servicesDesc6 = "Классический ритуал: распаривание, использование масел и опасного лезвия";
const servicesDesc7 = "Уберем седину либо сделаем бороду более выразительной";
const servicesDesc8 = "Стать моложе очень просто, достаточно лишь избавиться от седины";
const servicesDesc9 = "Горячий воск — это действенное средство для удаления волос на продолжительное время";

$('.sec3ChooseService1').click(function () {
  $(changingBgItem).css('background-image', servicesBg1);
  $(mainCostBlock).text($('.sec3ServicesCost1').text());
  $(mainTitleServices).text($('.sec3ChooseService1').text());
  $(mainDesc).text(servicesDesc1)
  $('.section-3__leftSide__serviceList-item:nth-child(1)').addClass('section-3__leftSide__serviceList-item__active');
  $('.section-3__leftSide__serviceList-item:not(:nth-child(1))').removeClass('section-3__leftSide__serviceList-item__active');
})
$('.sec3ChooseService2').click(function () {
  $(changingBgItem).css('background-image', servicesBg2);
  $(mainCostBlock).text($('.sec3ServicesCost2').text());
  $(mainTitleServices).text($('.sec3ChooseService2').text());
  $(mainDesc).text(servicesDesc2);
  $('.section-3__leftSide__serviceList-item:nth-child(2)').addClass('section-3__leftSide__serviceList-item__active');
  $('.section-3__leftSide__serviceList-item:not(:nth-child(2))').removeClass('section-3__leftSide__serviceList-item__active');

})
$('.sec3ChooseService3').click(function () {
  $(changingBgItem).css('background-image', servicesBg3);
  $(mainCostBlock).text($('.sec3ServicesCost3').text());
  $(mainTitleServices).text($('.sec3ChooseService3').text());
  $(mainDesc).text(servicesDesc3);
  $('.section-3__leftSide__serviceList-item:nth-child(3)').addClass('section-3__leftSide__serviceList-item__active');
  $('.section-3__leftSide__serviceList-item:not(:nth-child(3))').removeClass('section-3__leftSide__serviceList-item__active');
})
$('.sec3ChooseService4').click(function () {
  $(changingBgItem).css('background-image', servicesBg4);
  $(mainCostBlock).text($('.sec3ServicesCost4').text());
  $(mainTitleServices).text($('.sec3ChooseService4').text());
  $(mainDesc).text(servicesDesc4);
  $('.section-3__leftSide__serviceList-item:nth-child(4)').addClass('section-3__leftSide__serviceList-item__active');
  $('.section-3__leftSide__serviceList-item:not(:nth-child(4))').removeClass('section-3__leftSide__serviceList-item__active');
})
$('.sec3ChooseService5').click(function () {
  $(changingBgItem).css('background-image', servicesBg5);
  $(mainCostBlock).text($('.sec3ServicesCost5').text());
  $(mainTitleServices).text($('.sec3ChooseService5').text());
  $(mainDesc).text(servicesDesc5);
  $('.section-3__leftSide__serviceList-item:nth-child(5)').addClass('section-3__leftSide__serviceList-item__active');
  $('.section-3__leftSide__serviceList-item:not(:nth-child(5))').removeClass('section-3__leftSide__serviceList-item__active');
})
$('.sec3ChooseService6').click(function () {
  $(changingBgItem).css('background-image', servicesBg6);
  $(mainCostBlock).text($('.sec3ServicesCost6').text());
  $(mainTitleServices).text($('.sec3ChooseService6').text());
  $(mainDesc).text(servicesDesc6);
  $('.section-3__leftSide__serviceList-item:nth-child(6)').addClass('section-3__leftSide__serviceList-item__active');
  $('.section-3__leftSide__serviceList-item:not(:nth-child(6))').removeClass('section-3__leftSide__serviceList-item__active');
})
$('.sec3ChooseService7').click(function () {
  $(changingBgItem).css('background-image', servicesBg7);
  $(mainCostBlock).text($('.sec3ServicesCost7').text());
  $(mainTitleServices).text($('.sec3ChooseService7').text());
  $(mainDesc).text(servicesDesc7);
  $('.section-3__leftSide__serviceList-item:nth-child(7)').addClass('section-3__leftSide__serviceList-item__active');
  $('.section-3__leftSide__serviceList-item:not(:nth-child(7))').removeClass('section-3__leftSide__serviceList-item__active');
})
$('.sec3ChooseService8').click(function () {
  $(changingBgItem).css('background-image', servicesBg8);
  $(mainCostBlock).text($('.sec3ServicesCost8').text());
  $(mainTitleServices).text($('.sec3ChooseService8').text());
  $(mainDesc).text(servicesDesc8);
  $('.section-3__leftSide__serviceList-item:nth-child(8)').addClass('section-3__leftSide__serviceList-item__active');
  $('.section-3__leftSide__serviceList-item:not(:nth-child(8))').removeClass('section-3__leftSide__serviceList-item__active');
})
$('.sec3ChooseService9').click(function () {
  $(changingBgItem).css('background-image', servicesBg9);
  $(mainCostBlock).text($('.sec3ServicesCost9').text());
  $(mainTitleServices).text($('.sec3ChooseService9').text());
  $(mainDesc).text(servicesDesc9);
  $('.section-3__leftSide__serviceList-item:nth-child(9)').addClass('section-3__leftSide__serviceList-item__active');
  $('.section-3__leftSide__serviceList-item:not(:nth-child(9))').removeClass('section-3__leftSide__serviceList-item__active');
})
