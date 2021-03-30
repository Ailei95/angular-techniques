import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCardComponent implements OnInit {

  @Input() comment: Comment;

  constructor() {
  }

  ngOnInit(): void {
  }

}
