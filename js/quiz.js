$(function () {
  const groups = {
    express: {
      label: 'TRẠM KHÔNG GIAN HERTA · KHÁM PHÁ VÀ TRI THỨC',
      title: 'Trạm Không Gian Herta',
      image: 'images/herta-space-station.jpg',
      alt: 'Ảnh trong game về Trạm Không Gian Herta trôi giữa vũ trụ',
      description: 'Bạn luôn tò mò về những điều chưa biết và thích tự mình tìm câu trả lời. Bạn quan sát kỹ, đặt câu hỏi và hào hứng trước những khám phá mới. Trạm Không Gian Herta hợp với tinh thần ham học hỏi và khám phá của bạn.'
    },
    hunters: {
      label: 'PENACONY · SÁNG TẠO VÀ TỰ DO',
      title: 'Penacony — miền đất của những giấc mơ',
      image: 'images/penacony.jpg',
      alt: 'Phong cảnh Penacony trong Honkai: Star Rail',
      description: 'Bạn thích tự chọn con đường của mình, giàu trí tưởng tượng và không ngại thử điều khác biệt. Những ý tưởng mới, màu sắc và trải nghiệm độc đáo khiến bạn hào hứng. Penacony hợp với tinh thần sáng tạo và tự do ấy.'
    },
    belobog: {
      label: 'JARILO-VI · KIÊN CƯỜNG VÀ GẮN KẾT',
      title: 'Jarilo-VI — mái nhà giữa mùa đông',
      image: 'images/jarilo-vi.jpg',
      alt: 'Phố Belobog phủ tuyết trên hành tinh Jarilo-VI',
      description: 'Bạn coi trọng sự an toàn, lòng tin và những người ở bên mình. Dù gặp trở ngại, bạn vẫn sẵn sàng bảo vệ điều quan trọng và góp sức để cộng đồng vượt qua khó khăn. Sự kiên cường và ấm áp ấy gợi nhớ đến Belobog trên Jarilo-VI.'
    },
    luofu: {
      label: 'XIANZHOU LUOFU · ĐIỀM TĨNH VÀ SÁNG SUỐT',
      title: 'Xianzhou Luofu — con thuyền giữa biển sao',
      image: 'images/xianzhou-luofu.jpg',
      alt: 'Hình ảnh Xianzhou Luofu trong Honkai: Star Rail',
      description: 'Bạn thích quan sát, suy nghĩ nhiều bước và cân nhắc tác động dài hạn trước khi quyết định. Kinh nghiệm cùng sự điềm tĩnh giúp bạn ứng phó với thay đổi. Xianzhou Luofu phù hợp với cách tiếp cận chín chắn và có chiến lược của bạn.'
    },
    balanced: {
      label: 'NHÀ KHAI PHÁ · HỒ SƠ CÂN BẰNG',
      title: 'Bạn mang nhiều phong cách khai phá',
      image: '',
      alt: 'Bốn vùng đất nổi bật trong Honkai: Star Rail',
      description: 'Câu trả lời của bạn cho thấy nhiều nét tính cách cùng nổi bật.'
    }
  };

  const questions = [
    { text: 'Bạn bắt gặp một cánh cửa dẫn đến nơi chưa từng biết. Bạn sẽ…', answers: [['Bước vào để khám phá điều mới.', 'express'], ['Tìm hiểu mục tiêu và các lối ra trước.', 'hunters'], ['Kiểm tra xem có ai cần giúp đỡ phía bên kia không.', 'belobog'], ['Quan sát dấu vết và suy luận điều gì đang chờ.', 'luofu']] },
    { text: 'Trong một nhóm, bạn thường là người…', answers: [['Khơi gợi ý tưởng và kéo mọi người cùng tham gia.', 'express'], ['Tự chủ động xử lý phần việc khó.', 'hunters'], ['Đảm bảo không ai bị bỏ lại phía sau.', 'belobog'], ['Sắp xếp kế hoạch và nhắc cả nhóm nhìn xa hơn.', 'luofu']] },
    { text: 'Điều khiến một chuyến đi đáng nhớ nhất với bạn là…', answers: [['Những người bạn mới gặp dọc đường.', 'express'], ['Cảm giác tự quyết định lộ trình của mình.', 'hunters'], ['Nơi bình yên mà bạn giúp gìn giữ.', 'belobog'], ['Những bí mật và lịch sử được khám phá.', 'luofu']] },
    { text: 'Khi kế hoạch bất ngờ đổ vỡ, phản ứng đầu tiên của bạn là…', answers: [['Tìm cơ hội mới trong tình huống đó.', 'express'], ['Chuyển sang phương án B và tiếp tục.', 'hunters'], ['Trấn an mọi người rồi cùng giải quyết.', 'belobog'], ['Tạm dừng, đánh giá tình hình và điều chỉnh.', 'luofu']] },
    { text: 'Bạn muốn được đồng đội nhớ đến vì điều gì?', answers: [['Luôn đem đến góc nhìn thú vị.', 'express'], ['Nói được làm được.', 'hunters'], ['Là người mọi người có thể tin cậy.', 'belobog'], ['Đưa ra lời khuyên sáng suốt.', 'luofu']] },
    { text: 'Bạn được giao một nhiệm vụ khó. Bạn sẽ bắt đầu bằng cách…', answers: [['Tìm người cùng chí hướng để làm chung.', 'express'], ['Xác định mục tiêu rồi hành động nhanh.', 'hunters'], ['Nghĩ xem ai bị ảnh hưởng và cần bảo vệ.', 'belobog'], ['Thu thập dữ liệu, chia bước và tính rủi ro.', 'luofu']] },
    { text: 'Đâu là điều bạn khó chấp nhận nhất?', answers: [['Không được tự mình tìm hiểu thế giới.', 'express'], ['Bị người khác quyết định thay con đường của mình.', 'hunters'], ['Để người thân phải đơn độc khi gặp khó khăn.', 'belobog'], ['Đưa ra quyết định khi chưa hiểu đủ vấn đề.', 'luofu']] },
    { text: 'Nếu chọn một món đồ để mang theo, bạn chọn…', answers: [['Một cuốn sổ ghi lại những cuộc gặp gỡ.', 'express'], ['Tấm bản đồ có nhiều đường đi bí mật.', 'hunters'], ['Vật kỷ niệm nhắc về mái nhà.', 'belobog'], ['Cuốn sách ghi chép kiến thức và lịch sử.', 'luofu']] },
    { text: 'Khi có bất đồng, cách giải quyết hợp với bạn nhất là…', answers: [['Lắng nghe từng người rồi tìm điểm chung.', 'express'], ['Nói thẳng điều cần nói và chốt hướng đi.', 'hunters'], ['Giữ mọi người an toàn và tìm thỏa thuận công bằng.', 'belobog'], ['Tách cảm xúc khỏi dữ kiện để phân tích.', 'luofu']] },
    { text: 'Một ngày hoàn hảo của bạn sẽ có…', answers: [['Một nơi mới để khám phá cùng bạn bè.', 'express'], ['Thời gian tự do làm điều mình đã chọn.', 'hunters'], ['Bữa ăn yên bình cùng những người thân thiết.', 'belobog'], ['Khoảng lặng để đọc, học và suy ngẫm.', 'luofu']] },
    { text: 'Bạn thường đưa ra quyết định quan trọng dựa trên…', answers: [['Trải nghiệm và cảm nhận của những người liên quan.', 'express'], ['Mục tiêu mình thật sự muốn đạt được.', 'hunters'], ['Điều có ích và an toàn cho tập thể.', 'belobog'], ['Bằng chứng, kinh nghiệm và hệ quả lâu dài.', 'luofu']] },
    { text: 'Chọn câu mô tả bạn rõ nhất:', answers: [['“Còn nhiều điều hay ho ở phía trước.”', 'express'], ['“Tôi sẽ tự chọn con đường của mình.”', 'hunters'], ['“Chúng ta sẽ cùng nhau vượt qua.”', 'belobog'], ['“Hãy hiểu rõ tình hình trước khi bước tiếp.”', 'luofu']] }
  ];

  let current = 0;
  let selectedGroup = '';
  const scores = { express: 0, hunters: 0, belobog: 0, luofu: 0 };

  function drawQuestion() {
    const question = questions[current];
    selectedGroup = '';
    $('#question-counter').text('CÂU ' + String(current + 1).padStart(2, '0') + ' / ' + questions.length);
    $('#answer-count').text(current + ' câu đã chọn');
    $('#progress-fill').css('width', (current / questions.length * 100) + '%');
    $('#selection-hint').text('Chọn một đáp án để tiếp tục.');
    $('#continue-button').prop('disabled', true).html(current === questions.length - 1 ? 'Xem kết quả <span>→</span>' : 'Tiếp tục <span>→</span>');
    const answers = question.answers.map(function (answer, index) {
      return '<button class="answer-button" type="button" data-group="' + answer[1] + '"><span class="answer-symbol">' + String.fromCharCode(65 + index) + '</span><span>' + answer[0] + '</span></button>';
    }).join('');
    $('#question-content').html('<p class="question-kicker">CÂU HỎI TINH HÀ</p><h2 class="question-title" id="question-title">' + question.text + '</h2><div class="answer-list">' + answers + '</div>');
  }

  function showResult() {
    const maxScore = Math.max.apply(null, Object.values(scores));
    const leadingGroups = Object.keys(scores).filter(function (name) { return scores[name] === maxScore; });
    const resultKey = leadingGroups.length > 1 ? 'balanced' : leadingGroups[0];
    const result = groups[resultKey];
    const groupNames = { express: 'Trạm Không Gian Herta', hunters: 'Penacony', belobog: 'Jarilo-VI', luofu: 'Xianzhou Luofu' };
    const description = resultKey === 'balanced'
      ? 'Bạn có số điểm ngang nhau giữa ' + leadingGroups.map(function (name) { return groupNames[name]; }).join(', ') + '. Sự kết hợp này cho thấy bạn linh hoạt: có thể tò mò khám phá, chủ động theo đuổi mục tiêu, quan tâm đến đồng đội và suy nghĩ thấu đáo tùy tình huống.'
      : result.description;
    const isBalanced = resultKey === 'balanced';
    $('#result-image').prop('hidden', isBalanced);
    $('#result-image-grid').prop('hidden', !isBalanced);
    if (!isBalanced) $('#result-image').attr({ src: result.image, alt: result.alt });
    $('#result-label').text(result.label);
    $('#result-title').text(result.title);
    $('#result-description').text(description);
    $('#question-card').prop('hidden', true);
    $('#result-card').prop('hidden', false);
    $('#result-card')[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  $('#start-quiz').on('click', function () {
    current = 0;
    Object.keys(scores).forEach(function (key) { scores[key] = 0; });
    $('#result-card').prop('hidden', true);
    $('#intro-card').prop('hidden', true);
    $('#question-card').prop('hidden', false);
    drawQuestion();
    $('#question-card')[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  $('#question-content').on('click', '.answer-button', function () {
    selectedGroup = $(this).data('group');
    $('.answer-button').removeClass('is-selected');
    $(this).addClass('is-selected');
    $('#answer-count').text((current + 1) + ' / ' + questions.length + ' câu đã chọn');
    $('#selection-hint').text('Đáp án đã chọn. Bạn có thể đổi lựa chọn trước khi tiếp tục.');
    $('#continue-button').prop('disabled', false);
  });

  $('#continue-button').on('click', function () {
    if (!selectedGroup) return;
    scores[selectedGroup] += 1;
    if (current < questions.length - 1) {
      current += 1;
      drawQuestion();
    } else {
      showResult();
    }
  });

  $('#restart-quiz').on('click', function () {
    $('#result-card').prop('hidden', true);
    $('#question-card').prop('hidden', true);
    $('#intro-card').prop('hidden', false);
    $('#start-quiz').trigger('focus');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
