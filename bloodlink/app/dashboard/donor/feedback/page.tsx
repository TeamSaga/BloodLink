'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, Smile, Frown, Meh, Send, CheckCircle2 } from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

export default function FeedbackPage() {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send feedback to API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 max-w-xl">
        <Card className={getCardClass('blue')}>
          <CardHeader className={getHeaderClass('blue')}>
            <CardTitle className={getTitleClass('blue')}>
              <Send className="h-5 w-5" />
              Feedback & Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('blue')}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Thank you for your feedback!</h2>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  We appreciate your input and will use it to improve our platform.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-medium mb-2">How was your experience?</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className={`p-1 rounded-full ${rating && star <= rating ? 'bg-yellow-400' : 'bg-gray-200 dark:bg-gray-700'}`}
                        aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                      >
                        <Star className={`h-6 w-6 ${rating && star <= rating ? 'text-yellow-600' : 'text-gray-400'}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-2">Your Feedback</label>
                  <Textarea
                    placeholder="Share your thoughts, suggestions, or report an issue..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={5}
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Email (optional)</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">We may contact you for follow-up if needed.</p>
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Submit Feedback
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 