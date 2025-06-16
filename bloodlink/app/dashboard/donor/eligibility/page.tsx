'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Info,
  Calendar,
  Clock,
  Droplet,
  Heart,
  Shield,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';
import { format, addDays } from 'date-fns';

interface EligibilityCriteria {
  id: string;
  question: string;
  description?: string;
  category: 'general' | 'health' | 'lifestyle' | 'travel';
  importance: 'critical' | 'important' | 'informational';
  met: boolean | null;
}

interface EligibilityResult {
  isEligible: boolean;
  nextEligibleDate: Date | null;
  reasons: string[];
  recommendations: string[];
  score: number;
}

export default function EligibilityCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showDetails, setShowDetails] = useState<string[]>([]);
  const [criteria, setCriteria] = useState<EligibilityCriteria[]>([
    {
      id: 'age',
      question: 'Are you between 18 and 65 years old?',
      description: 'Donors must be at least 18 years old and not older than 65 years.',
      category: 'general',
      importance: 'critical',
      met: null
    },
    {
      id: 'weight',
      question: 'Do you weigh at least 50kg (110lbs)?',
      description: 'Minimum weight requirement ensures donor safety.',
      category: 'general',
      importance: 'critical',
      met: null
    },
    {
      id: 'last_donation',
      question: 'Has it been at least 56 days since your last donation?',
      description: 'Required waiting period between donations.',
      category: 'general',
      importance: 'critical',
      met: null
    },
    {
      id: 'health',
      question: 'Are you feeling healthy and well today?',
      description: 'You should be in good health on the day of donation.',
      category: 'health',
      importance: 'critical',
      met: null
    },
    {
      id: 'medications',
      question: 'Are you currently taking any medications?',
      description: 'Some medications may affect eligibility.',
      category: 'health',
      importance: 'important',
      met: null
    },
    {
      id: 'surgery',
      question: 'Have you had any surgery in the last 6 months?',
      description: 'Recent surgeries may affect eligibility.',
      category: 'health',
      importance: 'important',
      met: null
    },
    {
      id: 'tattoo',
      question: 'Have you gotten a tattoo or piercing in the last 4 months?',
      description: 'Required waiting period after body modifications.',
      category: 'lifestyle',
      importance: 'important',
      met: null
    },
    {
      id: 'travel',
      question: 'Have you traveled to any high-risk areas recently?',
      description: 'Some travel destinations may affect eligibility.',
      category: 'travel',
      importance: 'important',
      met: null
    }
  ]);

  const [result, setResult] = useState<EligibilityResult | null>(null);

  const toggleDetails = (id: string) => {
    setShowDetails(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleAnswer = (id: string, answer: boolean) => {
    setCriteria(prev => 
      prev.map(item => 
        item.id === id ? { ...item, met: answer } : item
      )
    );
  };

  const calculateEligibility = () => {
    const criticalCriteria = criteria.filter(c => c.importance === 'critical');
    const importantCriteria = criteria.filter(c => c.importance === 'important');
    
    const criticalMet = criticalCriteria.every(c => c.met === true);
    const importantMet = importantCriteria.every(c => c.met === true);
    
    const reasons: string[] = [];
    const recommendations: string[] = [];
    
    criteria.forEach(c => {
      if (c.met === false) {
        reasons.push(c.question);
        if (c.id === 'last_donation') {
          recommendations.push('Please wait until the required waiting period is over.');
        } else if (c.id === 'weight') {
          recommendations.push('Please ensure you meet the minimum weight requirement.');
        } else if (c.id === 'health') {
          recommendations.push('Please ensure you are in good health before donating.');
        }
      }
    });

    const isEligible = criticalMet && importantMet;
    const nextEligibleDate = isEligible ? null : addDays(new Date(), 56);
    
    const score = Math.round(
      (criteria.filter(c => c.met === true).length / criteria.length) * 100
    );

    setResult({
      isEligible,
      nextEligibleDate,
      reasons,
      recommendations,
      score
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Eligibility Check
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
              <Shield className="h-5 w-5 text-red-500" />
              <span className="font-semibold">Donor Safety First</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card className={getCardClass('blue')}>
          <CardHeader className={getHeaderClass('blue')}>
            <CardTitle className={getTitleClass('blue')}>
              <Clock className="h-5 w-5" />
              Check Your Eligibility
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('blue')}>
            <div className="space-y-4">
              <Progress 
                value={(currentStep / criteria.length) * 100} 
                className="h-2 bg-blue-100" 
              />
              <p className="text-sm text-gray-500">
                Step {currentStep + 1} of {criteria.length}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Eligibility Criteria */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className={getCardClass('red')}>
            <CardHeader className={getHeaderClass('red')}>
              <CardTitle className={getTitleClass('red')}>
                <Shield className="h-5 w-5" />
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('red')}>
              <div className="space-y-4">
                {criteria.map((criterion, index) => (
                  <div
                    key={criterion.id}
                    className={`p-4 rounded-lg border transition-all duration-200 ${
                      currentStep === index
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{criterion.question}</h3>
                          <Badge
                            variant={
                              criterion.importance === 'critical'
                                ? 'destructive'
                                : 'default'
                            }
                          >
                            {criterion.importance}
                          </Badge>
                        </div>
                        {showDetails.includes(criterion.id) && (
                          <p className="text-sm text-gray-500 mt-2">
                            {criterion.description}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleDetails(criterion.id)}
                      >
                        {showDetails.includes(criterion.id) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {currentStep === index && (
                      <div className="flex gap-2 mt-4">
                        <Button
                          variant={criterion.met === true ? 'default' : 'outline'}
                          onClick={() => handleAnswer(criterion.id, true)}
                          className="flex-1"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Yes
                        </Button>
                        <Button
                          variant={criterion.met === false ? 'destructive' : 'outline'}
                          onClick={() => handleAnswer(criterion.id, false)}
                          className="flex-1"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          No
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className={getCardClass('green')}>
            <CardHeader className={getHeaderClass('green')}>
              <CardTitle className={getTitleClass('green')}>
                <Heart className="h-5 w-5" />
                Eligibility Results
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('green')}>
              {result ? (
                <div className="space-y-6">
                  <div className="text-center">
                    {result.isEligible ? (
                      <div className="space-y-2">
                        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                        <h3 className="text-2xl font-bold text-green-600">
                          You are eligible to donate!
                        </h3>
                        <p className="text-gray-500">
                          Thank you for your commitment to saving lives.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <XCircle className="h-16 w-16 text-red-500 mx-auto" />
                        <h3 className="text-2xl font-bold text-red-600">
                          Not eligible at this time
                        </h3>
                        {result.nextEligibleDate && (
                          <p className="text-gray-500">
                            Next eligible date: {format(result.nextEligibleDate, 'PPP')}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {!result.isEligible && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Reasons:</h4>
                        <ul className="space-y-2">
                          {result.reasons.map((reason, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <AlertCircle className="h-4 w-4 text-red-500 mt-0.5" />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Recommendations:</h4>
                        <ul className="space-y-2">
                          {result.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <Info className="h-4 w-4 text-blue-500 mt-0.5" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-2">Eligibility Score:</h4>
                    <Progress value={result.score} className="h-2" />
                    <p className="text-sm text-gray-500 mt-2">
                      {result.score}% of criteria met
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    Complete the eligibility check to see your results
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          {currentStep < criteria.length - 1 ? (
            <Button
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={criteria[currentStep].met === null}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={calculateEligibility}
              disabled={criteria.some(c => c.met === null)}
            >
              Check Eligibility
              <Shield className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 