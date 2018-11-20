import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from 'config-lite';
import fn from 'funclib';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:      { type: String, required: [true, "Can't be blank"], unique: true, trim: true, index: true },
  email:     { type: String, required: [true, "Can't be blank"], unique: true, trim: true, index: true },
  phoneNb:   { type: String, unique: true, trim: true },
  password:  { type: String, required: [true, "Can't be blank"] },
  userType:  { type: Number, default: 1 },
  avater:    { type: String, default: '' },
  address:   { type: String, default: '' },
  company:   { type: String, default: '' },
  webset:    { type: String, default: '' },
  bio:       { type: String, default: '' },
  webset:    { type: String, default: '' },
  articles:  [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments:  [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  replies:   { type: Array, default: [] },
  messages:  { type: Array, default: [] },
  activity:  { type: Number, default: 0 }
}, {
  timestamps: true,
  collection: 'users'
});

class UserClass {
  validPassword(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
  }
  setPassword(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  }
  generateJWT() {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    }, config.secret);
  }
  favorite(id) {
    if (!this.favorites.includes(id)) this.favorites.push(id);
    return this.save();
  }
  async unfavorite(id) {
    this.favorites.remove(id);
    return await this.save();
  }
  isFavorite(id) {
    return this.favorites.some(favoriteId => favoriteId.toString() === id.toString());
  }
  follow(id) {
    if (!this.following.includes(id)) this.following.push(id);
    return this.save();
  }
  async unfollow(id) {
    this.following.remove(id);
    return await this.save();
  }
  isFollowing(id) {
    return this.following.some(followId => followId.toString() === id.toString());
  }
  toAuthJSON() {
    return {
      username: this.username,
      email: this.email,
      token: this.generateJWT(),
      bio: this.bio,
      image: this.image
    };
  }
  toProfileJSONFor(user) {
    return {
      username: this.username,
      bio: this.bio,
      avater: this.avater || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      following: user ? user.isFollowing(this._id) : false
    };
  }
}

UserSchema.loadClass(UserClass);

export default mongoose.model('User', UserSchema);
