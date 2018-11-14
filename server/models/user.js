import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from 'config-lite';
import fn from 'funclib';

const Schema = mongoose.Schema;

class UserSchema extends Schema {
  constructor() {
    super({
      name:     { type: String, required: [true, "Can't be blank"], unique: true, trim: true, index: true },
      email:    { type: String, required: [true, "Can't be blank"], unique: true, trim: true, index: true },
      phoneNb:  { type: String, unique: true, trim: true },
      password: { type: String, required: [true, "Can't be blank"] },
      userType: { type: Number, default: 1 },
      avater:   { type: String, default: '' },
      address:  { type: String, default: '' },
      company:  { type: String, default: '' },
      webset:   { type: String, default: '' },
      bio:      { type: String, default: '' },
      webset:   { type: String, default: '' },
      articles:   [{ type: Schema.Types.ObjectId, ref: 'Article' }],
      favorites:  [{ type: Schema.Types.ObjectId, ref: 'Article' }],
      followers:  [{ type: Schema.Types.ObjectId, ref: 'User' }],
      following:  [{ type: Schema.Types.ObjectId, ref: 'User' }],
      comments:   [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
      replies:    { type: Array, default: [] },
      messages:   { type: Array, default: [] },
      activity:   { type: Number, default: 0 }
    }, { timestamps: true });

    this.methods = fn.extend({}, this, [ 'generateJWT' ]);
    this.statics = fn.extend({}, this, []);
  }

  generateJWT() {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
  
    return jwt.sign({
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    }, config.secret);
  };
  
  
}

const userSchema = new UserSchema();

export default mongoose.model('User', userSchema);
