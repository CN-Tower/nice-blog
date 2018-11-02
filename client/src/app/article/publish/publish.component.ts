import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

declare var SimpleMDE: any;

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.less']
})
export class PublishComponent implements OnInit, AfterViewInit {
  nzOptions = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
        isLeaf: true
      }]
    }, {
      value: 'ningbo',
      label: 'Ningbo',
      isLeaf: true
    }]
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
        isLeaf: true
      }]
    }]
  }];
  values: any[] = null;
  simplemde: any;
  tags = [];
  inputVisible = false;
  inputValue = '';
  articleTitle: String = '';
  isPrivate: Boolean = false;
  @ViewChild('inputElement') inputElement: ElementRef;

  constructor(private modalService: NzModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.simplemde = new SimpleMDE({ element: document.getElementById('publish-textarea') });
    this.simplemde.value('### Hello world!');
  }

  handleClose(removedTag: string): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags.push(this.inputValue);
    }
    this.inputValue = '';
    this.inputVisible = false;
  }

  goBack() {
    this.modalService.confirm({
      nzTitle     : '你确定要放弃编辑，并离开吗？',
      nzContent   : '<b style="color: red;">此操作执行后，编辑的内容将会丢失！</b>',
      nzOkType    : 'danger',
      nzOkText    : '确定',
      nzCancelText: '取消',
      nzOnOk      : () => history.back()
    });
  }
}
